-- Schema SQL for Kreasiku
-- Initial Migration

CREATE TABLE categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE category_translations (
    category_id UUID REFERENCES categories(id) ON DELETE CASCADE,
    locale TEXT NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    PRIMARY KEY (category_id, locale)
);

CREATE TABLE pages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    category_id UUID REFERENCES categories(id),
    status TEXT NOT NULL DEFAULT 'idea', -- idea, generating, qc_pending, needs_review, approved, published, rejected
    age_min INT,
    age_max INT,
    difficulty INT, -- 1 to 5
    image_prompt TEXT,
    seed BIGINT,
    provider TEXT,
    qc_score INT,
    qc_report JSONB,
    phash TEXT,
    sharpness_metrics JSONB,
    file_urls JSONB, -- Stores paths for vector, pdf_a4, pdf_letter, png_300, png_600, thumbnail
    downloads_count INT DEFAULT 0,
    publish_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE page_translations (
    page_id UUID REFERENCES pages(id) ON DELETE CASCADE,
    locale TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    tags TEXT[],
    PRIMARY KEY (page_id, locale)
);

CREATE TABLE generation_runs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    page_id UUID REFERENCES pages(id),
    prompt_used TEXT,
    cost DECIMAL,
    error_log TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE audit_log (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    action TEXT NOT NULL,
    actor TEXT NOT NULL,
    target_id UUID,
    details JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
