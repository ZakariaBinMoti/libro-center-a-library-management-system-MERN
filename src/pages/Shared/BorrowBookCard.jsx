
import "@smastrom/react-rating/style.css";
import Swal from "sweetalert2";

 
const BorrowBookCard = ({ book, books, setBooks }) => {
    const { _id, image, name, category, borrowdate, returndate } = book;

    const handleReturn = (id) => {
        console.log(id);
        Swal.fire({
          title: "Do you want to return it?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Return it!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`http://localhost:5000/borrowedbooks/${id}`,{
                method: 'DELETE'
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                  Swal.fire({
                    title: "Success!",
                    text: "You have successfully returned your book",
                    icon: "success",
                  });

                  const remaining = books.filter(book => book._id !== id);
                  setBooks(remaining);
                  
                }
              });
          }
        });
      };




  
  return (
    <div className="flex flex-col justify-between shadow-lg p-5 rounded-sm">
      <div>
        <img src={image} alt="" />
        <h3 className="py-2 text-sm">{category}</h3>
        <hr />
        <h1 className="text-lg font-medium py-3 leading-6">{name}</h1>
        <p className="text-sm text-[#76b748e3]">Borrow Date: {borrowdate}</p>
        <p className="text-sm text-[red]">Return Date: {returndate}</p>
      </div>
      <div>
          <button onClick={()=>handleReturn(_id)} className="border rounded-full text-center mt-6 w-full text-[#666666] font-normal text-sm py-2 hover:bg-[red] hover:text-white">
            Return
          </button>
      </div>
    </div>
  );
};

export default BorrowBookCard;
