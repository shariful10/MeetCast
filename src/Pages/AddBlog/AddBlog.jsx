import React, { useRef, useState } from "react";
import { BsImageFill } from "react-icons/bs";
import toast from "react-hot-toast";
import { addBlog } from "../../Components/APIs/blogs";
import { imageUpload } from "../../Components/APIs/auth";
import useAuth from "./../../Components/Hooks/useAuth";
import { TbFidgetSpinner } from "react-icons/tb";
import ReactQuill from "react-quill"; // Import react-quill

import "react-quill/dist/quill.snow.css"; // Import styles for react-quill

const AddBlog = () => {
  const { user } = useAuth();
  const quillRef = useRef(null);
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (image) => {
    setUploadButtonText(image.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = user.email;
    const title = form.title.value;
    const subTitle = form.subTitle.value;
    // Access the editor's contents using the ref
    const description = quillRef.current.getEditor().root.innerHTML; // Get the HTML content
    const author_image = user.photoURL;
    const author_name = user.displayName;
    const date = new Date();
    const image = form.image.files[0];
    setUploadButtonText("Uploading...");

    // Upload image
    imageUpload(image)
      .then((data) => {
        const blogData = {
          email,
          image: data.data.display_url,
          title,
          subTitle,
          description,
          author_image,
          author_name,
          date,
          status: "approved",
        };
        addBlog(blogData)
          .then((data) => {
            console.log(data);
            setUploadButtonText("Uploaded!");
            setLoading(false);
            toast.success("Blog Publish Successfully");
            // form.reset();
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err.message);
        toast.error("Something went wrong");
      });
  };

  return (
    <div>
      <h2 className="text-center text-5xl font-semibold border-b-2 border-black w-[300px] pb-4 md:mx-auto">
        Add A Blog
      </h2>
      <div className="w-full md:max-w-3xl mx-auto bg-gray-100 p-5 md:p-20 rounded-xl mt-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block mb-2  font-medium text-gray-900 text-lg"
            >
              Blog Title <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900  rounded-lg block w-full p-5"
              placeholder="Blog Title"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="subTitle"
              className="block mb-2  font-medium text-gray-900 text-lg"
            >
              Blog Sub-Title <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="subTitle"
              name="subTitle"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900  rounded-lg block w-full p-5"
              placeholder="Blog Sub-Title"
              required
            />
          </div>

          <div className="mb-6 w-full">
            <label
              htmlFor="description"
              className="block mb-2  font-medium text-gray-900 text-lg"
            >
              Blog Description <span className="text-red-600">*</span>
            </label>
            <ReactQuill
              ref={quillRef}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-5"
              name="description"
              id="description"
              placeholder="Write your blog..."
              modules={{
                toolbar: [
                  ["bold", "italic", "underline", "strike"],
                  ["blockquote", "code-block"],
                  [{ list: "ordered" }, { list: "bullet" }],
                  [{ indent: "-1" }, { indent: "+1" }],
                  ["link", "image"],
                  ["clean"],
                ],
              }}
              formats={[
                "bold",
                "italic",
                "underline",
                "strike",
                "blockquote",
                "code-block",
                "list",
                "bullet",
                "indent",
                "link",
                "image",
              ]}
            />
          </div>

          <div className="">
            <div className="file_upload border-gray-300 rounded-lg bg-gray-700 py-4 px-5 max-w-fit">
              <label>
                <input
                  onChange={(e) => handleImageChange(e.target.files[0])}
                  className="cursor-pointer hidden"
                  type="file"
                  name="image"
                  id="image"
                  accept="image/*"
                  hidden
                />
                <div className="text-white text-[18px] font-semibold cursor-pointer flex gap-2 justify-center items-center">
                  {uploadButtonText} <BsImageFill />
                </div>
              </label>
            </div>
          </div>
          <div className="text-center md:text-left">
            <button
              type="submit"
              className="py-3 font-semibold bg-blue-500 text-white px-4 rounded-md hover:bg-blue-600 mt-5"
            >
              {loading ? (
                <div className="flex justify-center items-center gap-2">
                  <p className="font-semibold text-[18px]">Publishing</p>
                  <TbFidgetSpinner className="animate-spin" size={24} />
                </div>
              ) : (
                "Publish Blog"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
