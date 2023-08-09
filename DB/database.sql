CREATE DATABASE IF NOT EXISTS languages;

USE languages;

CREATE TABLE root_languages (
    id INT AUTO_INCREMENT,
    languages_name VARCHAR(100) DEFAULT NULL,
    PRIMARY KEY (id)
)

CREATE TABLE frontend_frameworks (
    id INT NOT NULL AUTO_INCREMENT,
    framework_name VARCHAR(100) DEFAULT NULL,
    framework_description TEXT DEFAULT NULL,
    root_language_id INT, 
    PRIMARY KEY (id)
);

ALTER TABLE frontend_frameworks ADD FOREIGN KEY (root_language_id) REFERENCES root_languages (id);

CREATE TABLE backend_frameworks (
    id INT NOT NULL AUTO_INCREMENT,
    framework_name VARCHAR(100) DEFAULT NULL,
    framework_description TEXT DEFAULT NULL,
    root_language_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (root_language_id) REFERENCES root_languages(id)
);


INSERT INTO root_languages (languages_name)
VALUES
    ('Java'),
    ('Python'),
    ('JavaScript'),
    ('TypeScript'),
    ('PHP'),
    ('C#'),
    ('Ruby'),
    ('Go'),
    ('Swift'),
    ('Rust');


INSERT INTO frontend_frameworks (framework_name, framework_description, root_language_id)
VALUES
    ('React.js', 'Una biblioteca de JavaScript para construir interfaces de usuario interactivas.', 3),
    ('Vue.js', 'Un framework progresivo de JavaScript para construir interfaces de usuario.', 3),
    ('jQuery', 'Una biblioteca de JavaScript para simplificar la manipulación del DOM.', 3),
    ('Bootstrap', 'Un framework de CSS para el desarrollo rápido de sitios web responsivos.', 5),
    ('Material-UI', 'Una biblioteca de componentes de React para crear interfaces de usuario atractivas.', 3),
    ('Tailwind CSS', 'Un framework de CSS utilitario para el diseño rápido de sitios web.', 3);

INSERT INTO backend_frameworks (framework_name, framework_description, root_language_id)
VALUES
    ('Express.js', 'Un framework de aplicaciones web para Node.js', 1),
    ('Django', 'Un framework de desarrollo web en Python', 2),
    ('Ruby on Rails', 'Un framework de desarrollo web en Ruby', 7),
    ('Spring', 'Un framework de aplicaciones empresariales para Java', 4),
    ('Laravel', 'Un framework de desarrollo web en PHP', 5),
    ('Flask', 'Un microframework web en Python', 2),
    ('ASP.NET', 'Un framework de desarrollo web en C#', 6);
