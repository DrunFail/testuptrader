interface SearchProps {
    dataSearch: string,
    handleSearch: () => void
}


export default function Search({ dataSearch, handleSearch }: SearchProps) {
    return (
        <form>
            <label>search</label>
            <input
                value={dataSearch}
                type='search'
                onChange={handleSearch}
            />
        </form>
        
        );
}