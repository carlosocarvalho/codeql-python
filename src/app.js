app.post('/search', (req, res) => {
    const userInput = req.body.search;
    // Concatenação direta do input do usuário na query SQL
    const query = `SELECT * FROM users WHERE name = '${userInput}'`;
    database.execute(query, (err, result) => {
      if (err) {
        res.send('Erro na consulta');
      } else {
        res.json(result);
      }
    });
  });