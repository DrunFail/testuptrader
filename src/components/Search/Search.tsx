interface SearchProps {
    dataSearch: string,
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
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