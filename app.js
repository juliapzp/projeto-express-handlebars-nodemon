const express = require('express');
const exphbs = require('express-handlebars');

const app = express();


app.use(express.static('public'));


app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');


app.get('/', (req, res) => {
    const produtos = [
        { id: 1, nome: 'Livro 1', descricao: 'Descrição do Livro 1' },
        { id: 2, nome: 'Livro 2', descricao: 'Descrição do Livro 2' },
        { id: 3, nome: 'Livro 3', descricao: 'Descrição do Livro 3' }
    ];
    res.render('home', { produtos });
});


app.get('/produto/:id', (req, res) => {
    const produtos = [
        { id: 1, nome: 'Livro 1', descricao: 'Descrição do Livro 1' },
        { id: 2, nome: 'Livro 2', descricao: 'Descrição do Livro 2' },
        { id: 3, nome: 'Livro 3', descricao: 'Descrição do Livro 3' }
    ];
    const produto = produtos.find(p => p.id == req.params.id);
    if (produto) {
        res.render('produto', { produto });
    } else {
        res.status(404).send('Produto não encontrado');
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
