import css from './SearchBox.module.css'

const SearchBox = ({value, handleFilter}) => {
  return (
    <div className={css.searchWrapper}>
        <p>Find contacts by name</p>
        <input type="text"  value={value}
        onChange={handleFilter} 
        className={css.inputSearch}/>
    </div>
  )
}

export default SearchBox