# Diagnóstico do site atual

## Causa principal das imagens quebradas

A página inicial mistura arquivos do domínio oficial com imagens apontando para um domínio temporário:

- Funciona: `solotopografia.com.br/wp-content/...`
- Quebra: `solotopografiaegeorr.mpitemporario.com.br/wp-content/...`

Na verificação realizada em 13/11/2026, o domínio `mpitemporario.com.br` usado nas URLs não resolvia no DNS (`host não conhecido`). Por isso o navegador não consegue baixar o banner principal e a imagem da seção institucional.

## Por que isso costuma acontecer no WordPress

O WordPress grava muitas URLs de mídia como endereços absolutos no banco de dados. Quando o site é criado em um ambiente temporário e depois migrado, trocar apenas o domínio do site não atualiza necessariamente todos os campos, metadados e estilos inline. O resultado é uma página servida pelo domínio correto que ainda tenta buscar parte das imagens no servidor antigo.

## Correção recomendada no site original

1. Fazer backup integral de arquivos e banco.
2. Substituir com ferramenta segura de `search-replace` todas as ocorrências do domínio temporário pelo domínio oficial, preservando dados serializados.
3. Confirmar que os arquivos existem em `wp-content/uploads` no servidor oficial.
4. Limpar cache do WordPress, plugin de performance, CDN e navegador.
5. Regenerar CSS/arquivos estáticos do tema ou construtor, se houver.
6. Rodar uma busca por URLs externas restantes e validar a página em desktop e celular.

## Decisão adotada neste protótipo

Todos os ativos visuais são locais ao projeto. Isso elimina dependências do WordPress, do domínio temporário e de terceiros, melhora a previsibilidade do carregamento e facilita a apresentação ao cliente.
