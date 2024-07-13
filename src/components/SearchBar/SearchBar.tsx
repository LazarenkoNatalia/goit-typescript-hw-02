
import { HiMagnifyingGlass } from "react-icons/hi2";
import stylSearch from './SearchBar.module.css'
import toast, { Toaster } from 'react-hot-toast'; 

import { SearchBarProps } from './SearchBar.types'



export default function SearchBar({ onSearch }: SearchBarProps) {

    
    const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // console.log(event.target.elements.searchPhotos.value)
        const myformev = event.target  as HTMLFormElement
        const myquery = myformev.elements.namedItem("searchPhotos") as HTMLInputElement;
        myquery.value.trim() === '' ? toast.error('Please enter key words for search') : onSearch(myquery.value);
        myformev.reset();
    };
    
    return (
        <header className={stylSearch.header}>
             <Toaster position="top-left" /> 
            <form  onSubmit={handleSubmitForm}>
                <input className={stylSearch.formInput}
                    name="searchPhotos"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
               
            <button className={stylSearch.formBtn} type="submit">
                <HiMagnifyingGlass className={stylSearch.icon} />
            </button>

            </form>
        </header>
    );
}



