import { Link } from "react-router-dom";
import { useState } from "react";

const Pagination = ({ url, pageNum, itemsNum }) => {
   const [maxPage, setMaxPage] = useState(Math.ceil(itemsNum / 9));

   const previousPage = () => {
      if (pageNum > 1) {
         return pageNum - 1;
      } else {
         return 1;
      }
   };

   const nextPage = () => {
      if (pageNum < maxPage) {
         return pageNum + 1;
      } else {
         console.log(maxPage);
         return maxPage;
      }
   };

   return (
      <nav aria-label="Page navigation example">
         <ul className="pagination">
            <li className="page-item">
               <Link className="page-link" to={`${url}/${previousPage()}`}>
                  Previous
               </Link>
            </li>
            <li className="page-item">
               <Link className="page-link" to={`${url}/${pageNum}`}>
                  {pageNum}
               </Link>
            </li>
            <li className="page-item">
               <Link className="page-link" to={`${url}/${nextPage()}`}>
                  Next
               </Link>
            </li>
         </ul>
      </nav>
   );
};

export default Pagination;
