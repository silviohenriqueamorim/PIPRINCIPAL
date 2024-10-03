import './searchBar.css'; // Importa o CSS específico para este componente

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const recentSearches = ['Pesquisa 1', 'Pesquisa 2', 'Pesquisa 3']; // Exemplo de pesquisas recentes

  const handleSearchClick = (search) => {
    setInputValue(search); // Preenche o input com a pesquisa clicada
    setIsFocused(false); // Fecha a lista de sugestões
  };
  return (
    <div>
    <form className="form-inline ml-auto flex-grow-1 scroll-container formi" style={{ paddingLeft: "10px" }}>
      <input className="searchBar form-control w-100" 
      type="text"
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)} // Você pode gerenciar o estado do foco de forma diferente
        placeholder="Pesquisar..." />
    </form>
      {isFocused && (
        <div className="recent-searches">
          {recentSearches
            .filter(search => search.toLowerCase().includes(inputValue.toLowerCase())) // Filtra sugestões
            .map((search, index) => (
              <div
                key={index}
                className="search-item"
                onMouseDown={() => handleSearchClick(search)} // Usa onMouseDown para evitar perda de foco
              >
                {search}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
