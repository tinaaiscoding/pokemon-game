fetch('/api/pokemons')
    .then(res => res.json())
    .then(myPokemons => {
        state.myPokemons = myPokemons
    })

function renderMyPokemonsList() {
    backDropOff()
    document.querySelector('#page').innerHTML = `
        <section class='party-pokemon-list'>
            ${renderMyPokemons()}
        </section>
    `
}

function renderMyPokemons() {
    return state.myPokemons.map(myPokemon => `
    <section class='myPokemon' data-id='${myPokemon.id}'>
        <header>
            <h2>${myPokemon.nickname}</h2>
            <span class='material-symbols-outlined edit-nickname' onClick="renderEditModal(event)">edit</span>
        </header>
        <p>HP: ${myPokemon.hp}</p>
        <p>ATTACK: ${myPokemon.attack}</p>
        <p>DEFENSE: ${myPokemon.defense}</p>
        <p>SPEED: ${myPokemon.speed}</p>
        <img src="${myPokemon.img}" alt="">
        <p>WIN COUNT: ${myPokemon.win_counts} </p>
        <button onClick="takePokemonToBattle(event)" class="to-battle-btn">BATTLE</button>
        <button onClick="releasePokemon(event)" class="to-battle-btn">RELEASE</button>
    </section>
    `).join('')

}

function renderEditModal(event) {
    const editBtn = event.target
    const myPokemonDOM = editBtn.closest('.myPokemon')
    const myPokemonId = myPokemonDOM.dataset.id
    const myPokemons = state.myPokemons

    myPokemons.forEach(myPokemon => {
        const myPokemonId1 = Number(myPokemonId)
        if (myPokemonId1 === myPokemon.id) {
            document.querySelector('#page').innerHTML = `
                <section class="modal visible">
                    <div class="modal-content edit-nickname" data-id="${myPokemon.id}">               
                        <form onSubmit="editNickname(event)">
                            <h2 class="modal-title">Edit Nickname ${myPokemon.nickname}</h2>
                            <fieldset>
                            <input placeholder="New Nickname" type="text" name="nickname">
                            </fieldset>
                            <button class="btn btn-edit"">Edit Nickname</button>
                        </form>
                        <button class="btn btn-cancel">Cancel</button>
                    </div>
                </section>
            `

            // backDropOn()

            // backdrop.addEventListener('click', () => {
            //     closeFormModal('edit-nickname-modal', allUserInputs);
            // });
        }
        function releasePokemon(event) {
            const deleteBtn = event.target
            const pokemonDOM = deleteBtn.closest('.myPokemon')
            const pokemonId = pokemonDOM.dataset.id

            // const editNicknameModal = document.querySelector('#edit-nickname-modal');
            // editNicknameModal.querySelector('.btn-cancel').addEventListener('click', () => {
            //     closeFormModal('edit-nickname-modal', allUserInputs);
            // });

            fetch(`/api/pokemons/${pokemonId}`, {
                method: 'DELETE'
            })
                .then(() => {
                    state.myPokemons = state.myPokemons.filter(t => t.id != pokemonId)
                    renderMyPokemonsList()
                })
        }

// function editName(event) {
//     event.preventDefault()



// }