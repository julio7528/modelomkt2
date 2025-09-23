-- Criar tabela de contatos
CREATE TABLE contacts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Criar índices para melhor performance
CREATE INDEX idx_contacts_email ON contacts(email);
CREATE INDEX idx_contacts_created_at ON contacts(created_at DESC);

-- Configurar RLS (Row Level Security)
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Política para inserção (permitir inserções anônimas)
CREATE POLICY "Allow anonymous inserts" ON contacts
    FOR INSERT
    TO anon
    WITH CHECK (true);

-- Política para leitura (apenas usuários autenticados)
CREATE POLICY "Allow authenticated reads" ON contacts
    FOR SELECT
    TO authenticated
    USING (true);

-- Conceder permissões
GRANT INSERT ON contacts TO anon;
GRANT SELECT ON contacts TO authenticated;