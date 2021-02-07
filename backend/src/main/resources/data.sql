INSERT INTO tb_user (name, email, password) VALUES ('Bob Brown', 'bob@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Ana Paula', 'ana@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Vitor Lucas', 'vitor@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Luisa Sampaio', 'luisa@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');


INSERT INTO tb_role (authority) VALUES ('ROLE_VISITOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_MEMBER');


INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (3, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (4, 1);


INSERT INTO tb_genre (name) VALUES ('Ação');
INSERT INTO tb_genre (name) VALUES ('Aventura');
INSERT INTO tb_genre (name) VALUES ('Drama');
INSERT INTO tb_genre (name) VALUES ('Crime');
INSERT INTO tb_genre (name) VALUES ('Romance');
INSERT INTO tb_genre (name) VALUES ('Terror');
INSERT INTO tb_genre (name) VALUES ('Comédia');

 
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('O Poderoso Chefão', 'O maior mafioso de todos', 1972, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg', 'Uma família mafiosa luta para estabelecer sua supremacia nos Estados Unidos depois da Segunda Guerra Mundial. Uma tentativa de assassinato deixa o chefão Vito Corleone incapacitado e força os filhos Michael e Sonny a assumir os negócios.', 3);
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('O Senhor dos Anéis', 'O Retorno do Rei', 2003, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/lXhgCODAbBXL5buk9yEmTpOoOgR.jpg', 'O confronto final entre as forças do bem e do mal que lutam pelo controle do futuro da Terra Média se aproxima. Sauron planeja um grande ataque a Minas Tirith, capital de Gondor, o que faz com que Gandalf e Pippin partam para o local na intenção de ajudar a resistência. Um exército é reunido por Theoden em Rohan, em mais uma tentativa de deter as forças de Sauron. Enquanto isso, Frodo, Sam e Gollum seguem sua viagem rumo à Montanha da Perdição para destruir o anel.', 2);
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Cidade de Deus', null, 2002,'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/194dso1hBwQEgIU3fgS7mXHtFAj.jpg', 'Buscapé (Alexandre Rodrigues) é um jovem pobre, negro e muito sensível, que cresce em um universo de muita violência. Buscapé vive na Cidade de Deus, favela carioca conhecida por ser um dos locais mais violentos da cidade. Amedrontado com a possibilidade de se tornar um bandido, Buscapé acaba sendo salvo de seu destino por causa de seu talento como fotógrafo, o qual permite que siga carreira na profissão. É através de seu olhar atrás da câmera que Buscapé analisa o dia-a-dia da favela onde vive, onde a violência aparenta ser infinita.', 4);
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Eu Sou a Lenda', 'O último homem na Terra não está sozinho', 2007, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/lhVVIWKR13khBvjFz8XyZ2GM0JS.jpg', 'Um terrível vírus incurável, criado pelo homem, dizimou a população de Nova York. Robert Neville (Will Smith) é um cientista brilhante que, sem saber como, tornou-se imune ao vírus. Há 3 anos ele percorre a cidade enviando mensagens de rádio, na esperança de encontrar algum sobrevivente. Robert é sempre acompanhado por vítimas mutantes do vírus, que aguardam o momento certo para atacá-lo. Paralelamente ele realiza testes com seu próprio sangue, buscando encontrar um meio de reverter os efeitos do vírus.', 6);
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Amizade Colorida', null, 2011, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/sADMOwdhVQp0LXvNj0CGogVEjXy.jpg','Jamie (Mila Kunis) é uma jovem recrutadora de Nova York que convence um cliente em potencial (Justin Timberlake) a deixar seu emprego em Los Angeles para trás e aceitar um emprego na Big Apple. Ele aceita a proposta e logo os dois se tornam bons amigos. Um dia, após assistir um filme na casa dela, surge o papo do quanto a carência sexual incomoda ambos. Eles fazem um pacto de que terão apenas sexo, sem qualquer envolvimento emocional. Só que, aos poucos, a intimidade faz com que eles se tornem cada vez mais próximos e interessados um no outro.',5);
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Mortal Kombat Legends', 'A Vingança de Scorpion', 2020, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/Abc1FK3Zn6PJCaKh46D9ZvwaX5a.jpg', 'Após o massacre cruel de sua família pelo mercenário Sub-Zero, Hanzo Hasashi é exilado no tortuoso Netherrealm, lá, em troca de sua servidão ao sinistro Quan Chi, ele tem a chance de vingar sua família - e ressuscita como Scorpion, uma alma perdida e vingativa. De volta ao Earthrealm, Lord Raiden reúne uma equipe de guerreiros de elite - o monge Shaolin Liu Kang, a oficial das Forças Especiais Sonya Blade e o ator de ação Johnny Cage - um grupo improvável de heróis com uma chance de salvar a humanidade. Para fazer isso, eles devem derrotar a horda de gladiadores do Outworld de Shang Tsung e vencer o torneio Mortal Kombat.',1);
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Minha Mãe é Uma Peça', null, 2013, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/7Q17u4EdXuPhZWfA7QiYFObkwhA.jpg', 'Dona Hermínia, uma mulher de meia idade, aposentada e sozinha, tem como preocupação maior cuidar dos filhos. Mas agora que eles cresceram e não param de confrontá-la, a solução será dar um gelo e sair de casa. Sem um trabalho ou um companheiro, a dona de casa resolve desabafar com a tia idosa.', 7);
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Mulher-Maravilha 1984', 'Uma nova era de maravilhas começa.', 2020, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/srYya1ZlI97Au4jUYAktDe3avyA.jpg', 'Em 1984, Diana Prince entra em conflito com dois inimigos formidáveis, Maxwell Lord e a Mulher-Leopardo, enquanto reencontra misteriosamente com seu antigo interesse amoroso Steve Trevor.', 2);
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Tenet', 'O tempo acaba.', 2020, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/wzJRB4MKi3yK138bJyuL9nx47y6.jpg', 'Armado com apenas uma palavra – Tenet – e lutando pela sobrevivência do mundo inteiro, o Protagonista viaja através de um mundo crepuscular de espionagem internacional em uma missão que irá desenrolar em algo para além do tempo real.', 1);
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('American Pie Apresenta', 'Meninas ao Ataque', 2020, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/dHFskXdLIjbuFLttyD46CgLc6o5.jpg', 'Um grupo de mulheres decide aproveitar seu poder feminino e se unir para conseguir o que querem no último ano do ensino médio.', 7);


INSERT INTO tb_review (text, movie_id, user_id) values ('Esse filme é bom, só não gostei muito do final', 9, 2);
INSERT INTO tb_review (text, movie_id, user_id) values ('Esse filme nunca perde a graça, já assiti varias vezes', 4, 2);
INSERT INTO tb_review (text, movie_id, user_id) values ('Ri muito, super recomendo', 7, 2);
INSERT INTO tb_review (text, movie_id, user_id) values ('Sou super fã dessa serie de filmes', 1, 2);
INSERT INTO tb_review (text, movie_id, user_id) values ('Não gostei, achei sem graça', 10, 2);

INSERT INTO tb_review (text, movie_id, user_id) values ('Até que é legal, dou nota 7', 10, 3);
INSERT INTO tb_review (text, movie_id, user_id) values ('Achei muito legal, cheio de animações legais', 8, 3);
INSERT INTO tb_review (text, movie_id, user_id) values ('Muito fera !!! super recomendo !!', 6, 3);
INSERT INTO tb_review (text, movie_id, user_id) values ('Legal, esse filme me faz lembrar minha ex namorada ;(', 5, 3);
INSERT INTO tb_review (text, movie_id, user_id) values ('Filme excelente, o enredo é muito bem elaborado', 3, 3);











