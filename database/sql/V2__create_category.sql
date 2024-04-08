CREATE TABLE IF NOT EXISTS category
(
    id         SERIAL PRIMARY KEY,
    name       VARCHAR(255) NOT NULL,
    is_disable  BOOLEAN      NOT NULL DEFAULT false,
    created_at TIMESTAMP             DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP             DEFAULT CURRENT_TIMESTAMP
);

-- Ensure that the created_at and updated_at columns are automatically updated
CREATE OR REPLACE FUNCTION update_timestamp()
    RETURNS TRIGGER AS
$$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_category_timestamp
    BEFORE UPDATE
    ON category
    FOR EACH ROW
EXECUTE FUNCTION update_timestamp();