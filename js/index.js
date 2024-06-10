const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
	document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
	link.addEventListener('click', () => {
		document.body.classList.remove('nav-open');
	})
})



const link__my_services_values = ["Meus Serviços", "My Services"];
const link__about_me_values = ["Sobre Mim","About me"];
const link__my_work_values = ["Meus Trabalhos", "My Works"];

const section__title__intro_values = ["Oi, eu sou o <strong> Allan Borges </strong>","Hi, I am <strong> Allan Borges </strong>"];
const section__title_services_values = ["O que eu faço","What I do"];

const service__1__title_values = ["Desenvolvedor Web", "Web Developer"];
const service__1__description_values = ["Como desenvolvedor web, utilizo Python, Django, PostgreSQL, HTML, CSS, JavaScript e Bootstrap para criar e manter sites e aplicações web. Uso Python e o framework Django para construir a lógica do servidor e gerenciar a base de dados com PostgreSQL. Com HTML e CSS, estruturo e estilizo as páginas, enquanto JavaScript adiciona interatividade. O Bootstrap me ajuda a garantir que os sites sejam responsivos e funcionem bem em dispositivos de diferentes tamanhos.","As a web developer, I use Python, Django, PostgreSQL, HTML, CSS, JavaScript and Bootstrap to create and maintain websites and web applications. I use Python and the Django framework to build the server logic and manage the database with PostgreSQL. With HTML and CSS, I structure and style pages, while JavaScript adds interactivity. Bootstrap helps me ensure websites are responsive and work well on devices of different sizes."];

const service__2__title_values = ["Web Scraping", "Web Scraping"];
const service__2__description_values = ["Como desenvolvedor especializado em web scraping com Python, utilizo ferramentas poderosas como BeautifulSoup, Scrapy e Selenium para extrair dados de sites. Com BeautifulSoup, analiso a estrutura HTML das páginas para encontrar e coletar as informações desejadas. Scrapy, um framework robusto de scraping, me permite construir spiders que navegam e coletam dados de maneira eficiente e escalável. Quando é necessário interagir com elementos dinâmicos, uso Selenium para automatizar a navegação e a extração de dados. Em resumo, combino essas ferramentas para transformar dados não estruturados da web em informações úteis e organizadas para diversas aplicações.","As a developer specializing in web scraping with Python, I use powerful tools like BeautifulSoup, Scrapy and Selenium to extract data from websites. With BeautifulSoup, I analyze the HTML structure of pages to find and collect the desired information. Scrapy, a robust scraping framework, allows me to build spiders that navigate and collect data in an efficient and scalable way. When it is necessary to interact with dynamic elements, I use Selenium to automate navigation and data extraction. In short, I combine these tools to transform unstructured web data into useful, organized information for a variety of applications."];

const service__3__title_values = ["Desenvolvedor Web", "Web Developer"];
const service__3__description_values = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pharetra sed mauris quis fringilla. Suspendisse vel tellus non urna molestie laoreet. Pellentesque quis tristique odio, sed congue mi. Aenean consequat orci pellentesque, varius nunc vitae, tempus tellus. Nulla vitae elit dui. Donec luctus arcu quis viverra vehicula. Suspendisse ultrices consectetur diam, quis sollicitudin sem convallis in. Integer ac leo et nunc molestie fermentum ac id ex. Ut nec tristique massa. Duis et vehicula nibh, eget posuere est. Nullam in orci dui. Morbi nibh diam, euismod non diam et, convallis lobortis nibh. Donec nec erat congue, interdum felis quis, tempus nunc. Sed facilisis, libero sed tempus aliquet, dui magna consectetur quam, id posuere ligula purus quis odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque tortor lorem, vestibulum at vehicula vitae, blandit ac orci.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec sapien tincidunt, fringilla massa quis, euismod odio. Sed eget cursus dui. Maecenas dignissim vehicula pretium. Integer congue sodales vestibulum. Ut ut finibus risus. Nunc justo erat, congue rutrum pellentesque eget, imperdiet quis leo. Sed tincidunt felis tristique, tincidunt magna vitae, porttitor nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec sapien tincidunt, fringilla massa quis, euismod odio. Sed eget cursus dui. Maecenas dignissim vehicula pretium. Integer congue sodales vestibulum. Ut ut finibus risus. Nunc justo erat, congue rutrum pellentesque eget, imperdiet quis leo. Sed tincidunt felis tristique, tincidunt magna vitae, porttitor nisl."];

const my__work_values = ["Meu trabalho","My work"];

const section__title__about_values = ["Quem sou eu","Who I am"];
const section__subtitle__about_values = ["Um breve resumo da minha trajetória","A brief summary of my trajectory"];

const about__me__body_values = ["<p>Trabalhei como suporte técnico no setor de TI de uma faculdade chamada <a href='https://www.fasap.edu.br/' target='blank'>FASAP</a> por uma década. Durante este período desenvolvi uma forte habilidade em resolução de problemas, atendimento ao cliente e compreensão de sistemas de software (principalmente da área de gestão acadêmica) e hardware. Este trabalho me permitiu realizar uma grande variedade de tarefas indo desde do suporte ai usuário final passando por configuração de redes,  manutenção de computadores, gerenciamento de uma plataforma Moodle à criação de relatórios acadêmicos.</p><p>Motivado pelo meu interesse resolver problemas de lógica e da ideia de utilizar programação de computadores para auxiliar na resolução de problemas de outras áreas decidi me dedicar ao desenvolvimento web. Para isso tenho me dedicado ao estudo de linguagens de programação e tecnologia como: Python, Django, CSS, HTML, Javascript, Postgres e Bootstrap são as principais no momento.</p>",
"<p>I worked as technical support in the IT department of a college called <a href='https://www.fasap.edu.br/' target='blank'>FASAP</a> for a decade. During this period I developed strong skills in problem solving, customer service and understanding software systems (mainly in the area of ​​academic management) and hardware. This work allowed me to carry out a wide variety of tasks ranging from end-user support, network configuration, computer maintenance, management of a Moodle platform to the creation of academic reports.</p><p>Motivated by my interest in solving logic problems and the idea of ​​using computer programming to help solve problems in other areas, I decided to dedicate myself to web development. To this end, I have dedicated myself to studying programming and technology languages ​​such as: Python, Django, CSS, HTML, Javascript, Postgres and Bootstrap are the main ones at the moment.</p>"];

const section__title__work_values = ["Meus trabalhos","My works"];
const section__subtitle__work_values = ["Uma seleção da minha gama de trabalhos","A selection of my range of work"];


const alternate = (index = 0) => {
    const link__my_services_el = document.getElementById('link__my_services');
    const link__my_work_el = document.getElementById('link__my-work');
    const link__about_me_el = document.getElementById('link__about_me');
    
    const section__title__intro_el = document.getElementById('section__title--intro');    
    const section__title_services_el = document.getElementById('section__title--services');
    const service__1__title_el = document.getElementById('service__1__title');
    const service__1__description_el = document.getElementById('service__1__description');
    const service__2__title_el = document.getElementById('service__2__title');
    const service__2__description_el = document.getElementById('service__2__description');
    //const service__3__title_el = document.getElementById('service__3__title');
    //const service__3__description_el = document.getElementById('service__3__description');
    const my__work_el = document.getElementById('my__work');
    
    const section__title__about_el = document.getElementById('section__title--about');
    const section__subtitle__about_el = document.getElementById('section__subtitle--about');
    const about__me__body_values_el = document.getElementById('about--me__body');
    
    const section__title__work_el = document.getElementById('section__title--work');
    const section__subtitle__work_el = document.getElementById('section__subtitle--work');
    
     
    
    link__my_services_el.innerHTML = link__my_services_values[index];
    link__about_me_el.innerHTML = link__about_me_values[index];
    link__my_work_el.innerHTML = link__my_work_values[index];
    
    section__title__intro_el.innerHTML = section__title__intro_values[index];
    section__title_services_el.innerHTML = section__title_services_values[index];
    service__1__title_el.innerHTML = service__1__title_values[index];
    service__1__description_el.innerHTML = service__1__description_values[index];
    service__2__title_el.innerHTML = service__2__title_values[index];
    service__2__description_el.innerHTML = service__2__description_values[index];
    //service__3__title_el.innerHTML = service__3__title_values[index];
    //service__3__description_el.innerHTML = service__3__description_values[index];
    
    my__work_el.innerHTML = my__work_values[index];
    
    section__title__about_el.innerHTML = section__title__about_values[index];
    section__subtitle__about_el.innerHTML = section__subtitle__about_values[index];
    about__me__body_values_el.innerHTML = about__me__body_values[index];
    
    section__title__work_el.innerHTML = section__title__work_values[index];
    section__subtitle__work_el.innerHTML = section__subtitle__work_values[index];
    


}

document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById('toggle-button');
    const toggleLabel = document.querySelector('.toggle-label');
    const toggleTexts = document.querySelectorAll('.toggle-text');

    toggleButton.addEventListener('change', function() {
        if (toggleButton.checked) {
            toggleTexts[0].style.color = '#fff';
            toggleTexts[1].style.color = '#4caf50';
            
            alternate(0);
        } else {
            toggleTexts[0].style.color = '#06f';
            toggleTexts[1].style.color = '#fff';
            
            alternate(1);
        }
    });
});

