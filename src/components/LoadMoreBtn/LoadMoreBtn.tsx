import stylLoadMore from './LoadMoreBtn.module.css'
interface iLoadMoreBtn {
  handleClickMore: () => void;
}

export default function LoadMoreBtn({ handleClickMore } : iLoadMoreBtn) {
  return (
    <button type="button" className={stylLoadMore.loadMore} onClick={handleClickMore}
      // disabled={disabled}
    >Load More</button>
  )
}

