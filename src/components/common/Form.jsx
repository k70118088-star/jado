import React, { useState } from "react";
import Button from "./Button";
import Swal from "sweetalert2";

const Form = ({
  title,
  fields = [],
  buttonText,
  btcss,
  formCss,
  titleCss,
  inputCss,
  textareaCss,
}) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e, name) => {
    setFormData({
      ...formData,
      [name]: e.target.value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validate = () => {
    let newErrors = {};

    fields.forEach((field) => {
      const value = formData[field.name];

      if (!value || value.trim() === "") {
        newErrors[field.name] = `${field.label} is required`;
      }

      if (field.type === "email" && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          newErrors[field.name] = "Enter a valid email address";
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Form submitted successfully!",
    });
  };

  return (
    <div className="p-2 z-40 bg-white/30 backdrop-blur-[10px] rounded-2xl shadow-[10px_10px_20px_0px_#00000033]">
      <form
        onSubmit={handleSubmit}
        className={`${formCss} p-4 flex flex-col gap-4 bg-white rounded-2xl`}
      >
        {title && <span className={`${titleCss}`}>{title}</span>}

        {fields.map((field, index) => (
          <div key={index} className="flex flex-col gap-1">
            <label>{field.label}</label>

            {field.type === "textarea" ? (
              <>
                <textarea
                  className={`${textareaCss}`}
                  placeholder={field.placeholder}
                  value={formData[field.name] || ""}
                  onChange={(e) => handleChange(e, field.name)}
                ></textarea>
                {errors[field.name] && (
                  <span className="text-red-500 text-sm">
                    {errors[field.name]}
                  </span>
                )}
              </>
            ) : (
              <>
                <input
                  className={`${inputCss}`}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formData[field.name] || ""}
                  onChange={(e) => handleChange(e, field.name)}
                />
                {errors[field.name] && (
                  <span className="text-red-500 text-sm">
                    {errors[field.name]}
                  </span>
                )}
              </>
            )}
          </div>
        ))}

        <Button text={buttonText} className={btcss} />
      </form>
    </div>
  );
};

export default Form;
