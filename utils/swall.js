import Swal from "sweetalert2";

class SweetAlert {
  setWait = (title, html) => {
    Swal.fire({
      title: title,
      html: html, // add html attribute if you want or remove
      icon: "info",
      showConfirmButton: false,
      allowOutsideClick: false,
    });
  };

  setSuccess = (data) => {
    Swal.fire("Uğurlu əməliyyat!", `${data.message}`, "success")
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  setSuccessOutUrl = (data) => {
    Swal.fire("Uğurlu əməliyyat!", `${data.message}`, "success")
      .then(() => {
        console.log("deleted successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  setError = (message) => {
    Swal.fire({
      icon: "error",
      title: "Xəta!",
      text: `${message}`,
    })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  showConfirmation = (title, deleteItem) => {
    return Swal.fire({
      title: title,
      text: `${deleteItem} ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Bəli",
      cancelButtonText: "Xeyr",
    });
  };

  toast = (icon, title) => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: icon,
      title: title,
    });
  };
}

const sweetAlert = new SweetAlert();
export default sweetAlert;
