# Agência Modelo Marketing - Landing Page

Landing page "em breve" moderna e profissional para a Agência Modelo Marketing, especializada em sistemas, sites e aplicações com Inteligência Artificial.

## 🚀 Tecnologias

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS com cores personalizadas
- **Backend**: Supabase (PostgreSQL)
- **Formulários**: React Hook Form
- **Ícones**: Lucide React
- **Fontes**: Google Fonts (Montserrat, Poppins, Lato, Raleway)

## 🎨 Design

### Paleta de Cores
- **Tiffany Blue**: #A0E7E5
- **Mint**: #B4F8C8
- **Hot Pink**: #FFAEBC
- **Yellow**: #FBE7C6

### Tipografia
- **Títulos**: Montserrat, Poppins
- **Corpo**: Lato, Raleway

## 📦 Instalação

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   ```bash
   cp .env.example .env
   ```
   
4. Edite o arquivo `.env` com suas credenciais do Supabase:
   ```env
   VITE_SUPABASE_URL=sua_url_do_supabase
   VITE_SUPABASE_ANON_KEY=sua_chave_anonima_do_supabase
   VITE_WHATSAPP_NUMBER=5511999999999
   ```

## 🗄️ Configuração do Supabase

1. Crie um projeto no [Supabase](https://supabase.com)
2. Execute o seguinte SQL no editor SQL do Supabase:

```sql
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

-- Criar índices
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
```

## 🚀 Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Linting
npm run lint

# Type checking
npm run check
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Header.tsx          # Cabeçalho com logo
│   ├── HeroSection.tsx     # Seção principal com headline
│   ├── ContactForm.tsx     # Formulário de contato
│   ├── Footer.tsx          # Rodapé com redes sociais
│   └── WhatsAppButton.tsx  # Botão flutuante do WhatsApp
├── lib/
│   └── supabase.ts         # Configuração do Supabase
├── types/
│   └── index.ts            # Tipos TypeScript
├── App.tsx                 # Componente principal
├── main.tsx               # Ponto de entrada
└── index.css              # Estilos globais
```

## 🎯 Funcionalidades

- ✅ Design responsivo (mobile-first)
- ✅ Formulário de contato funcional
- ✅ Integração com Supabase
- ✅ Validação de formulário
- ✅ Botão flutuante do WhatsApp
- ✅ Dark mode support
- ✅ SEO otimizado
- ✅ Animações suaves
- ✅ Acessibilidade

## 📱 Responsividade

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Personalização

### Cores
Edite o arquivo `tailwind.config.js` para alterar as cores da marca.

### Conteúdo
Os textos podem ser alterados diretamente nos componentes em `src/components/`.

### WhatsApp
Altere o número do WhatsApp na variável de ambiente `VITE_WHATSAPP_NUMBER`.

## 📄 Licença

© 2025 Agência Modelo Marketing. Todos os direitos reservados.
