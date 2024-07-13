import { useState, useEffect, FC } from 'react'
 import toast, { Toaster } from 'react-hot-toast'; 
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//  import './App.css'
import {getPhotosApi, PhotosType, Response  } from './api/apiUnsplash'
import SearchBar from './components/SearchBar/SearchBar'
import Loader from './components/Loader/Loader'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import LoadMoreBtn  from './components/LoadMoreBtn/LoadMoreBtn'
import ImageGallery from './components/ImageGallery/ImageGallery'
import ImageModal from './components/ImageModal/ImageModal'
import {ModalParamsType} from './components/ImageModal/ImageModal.types'


const modalInitParams: ModalParamsType = {
  isOpen: false,
  url: '',
  description: '',
};


export default function App() {
  const [query, setQuery] = useState<string>('');
  const [photos, setPhotos] = useState<PhotosType[]>([]);
  const [isLoader, setIsLoader] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)
  const [isLoadMoreBtn, setIsLoadMoreBtn] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)
  const [modalParams, setModalParams] = useState<ModalParamsType>(modalInitParams);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery)

    setPhotos([])
    setPage(1)
    setIsError(false)
  };
  
 const handlePhotoClick = (url: string, description: string ) => {
        setModalParams({ isOpen: true, url, description });
    };

    const handleModalClose = () => {
        setModalParams(modalInitParams);
  };   

   const handleClickMore = () => {
        setPage(page + 1);
    };

  // const query = 'cat'
  // const page = 1
 
  useEffect(() => {
        if (query === '') {
            return;
        }

   async function getData() {
     try
     {
       setIsError(false)
       setIsLoader(true)
       const { results, total_pages } : Response = await getPhotosApi(query, page);
      //  console.log(results)
      //  console.log(total_pages)
       setPhotos(prevPhotos => {
                return [...prevPhotos, ...results];
                });
   if (total_pages === 0) {toast.error('Nothing was found for your request')}          
   (total_pages>0 && page<total_pages)? setIsLoadMoreBtn(true):setIsLoadMoreBtn(false)
     }
     catch {
       setIsError(true)
   setIsLoadMoreBtn(false)
     }
   finally {
     setIsLoader(false)
   }
         }

    getData();
   }, [ query, page ]
  );
  
 useEffect(() => {
        if (page === 1) return;
  
window.scrollBy({
      top: 550,
      behavior: 'smooth',
      });
 }, [photos, page]);

  return <>
    <SearchBar onSearch={handleSearch} />
     <Toaster position="top-left" /> 
    {isLoader && <Loader />}
    {isError && <ErrorMessage />}

 {photos.length > 0 && (
                <ImageGallery cards={photos} onPhotosClick={handlePhotoClick} />
            )}

    {photos.length > 0 && !isLoader && isLoadMoreBtn && <LoadMoreBtn handleClickMore={handleClickMore} />}
  
  
    {modalParams && (
                    <ImageModal
                        url={modalParams.url}
                        description={modalParams.description}
                        isOpen={modalParams.isOpen}
                        onClose={handleModalClose}
                    />
                )}
  </>

    }


