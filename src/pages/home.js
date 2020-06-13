
import getData from '../utils/getData';

const Home = async() => {
    const characters = await getData();
    const view = `
        <div class="Characters">
            ${characters.results.map(character => `
                <article class="Characters-item">
                    <a href="#/${character.id}">
                        <h2>${character.name}</h2>
                        <img src="${character.image}" alt="${character.name}">
                        <button>
                        Ver más</button>
                    </a>
                </article>
            `).join('')}
        </div>
    `;
    return view;
}

export default Home;