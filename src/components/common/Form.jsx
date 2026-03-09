import React, { useState, useRef } from "react";
import Button from "./Button";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

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
  const form = useRef();
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
        newErrors[field.name] = `${field.name} is required`;
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

    if (!validate()) {
     
      return;
    } else {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Form submitted successfully!",
      });
      emailjs.sendForm("service_qpy4s2h", "template_a6n0sok", form.current, {
        publicKey: "72MWNrEJtBA43LUiv",
      });
    }
  };

  return (
    <div className="p-2 z-50 max-w-129 bg-white/30 backdrop-blur-[10px] rounded-2xl shadow-[10px_10px_20px_0px_#00000033]">
      <form
        ref={form}
        onSubmit={handleSubmit}
        className={`${formCss} p-4  flex flex-col gap-3 bg-white rounded-2xl`}
      >
        {title && <span className={`${titleCss}`}>{title}</span>}

        {fields.map((field, index) => (
          <div key={index} className="flex flex-col gap-2">
            <label className="font-normal text-base leading-[150%] text-[#1D1F26]">{field.label}</label>

            {field.type === "textarea" ? (
              <>
                <textarea
                  className={`${textareaCss}`}
                  placeholder={field.placeholder}
                  name={field.name}
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
                  name={field.name}
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
