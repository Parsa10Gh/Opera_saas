import React, { useState, useEffect } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import {
  RsetPassword,
  RsetPasswordConfirmation,
  selectPassword,
  selectPasswordConfirmation,
} from "@/slices/MainSlice";
import { AppDispatch } from "../../store/store";

// Password validation function
const passwordValidation = (pass: string): boolean => {
  const hasNumber = /[0-9]/;
  const hasUpperCase = /[A-Z]/;
  const hasLowerCase = /[a-z]/;
  const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/;
  const isEnough = pass.length > 7;

  // Check if password contains spaces
  const hasSpace = pass.includes(" ");

  return (
    hasNumber.test(pass) &&
    hasUpperCase.test(pass) &&
    hasLowerCase.test(pass) &&
    hasSymbol.test(pass) &&
    !hasSpace &&
    isEnough
  );
};

const ConfirmPassword: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const password = useSelector(selectPassword);
  const passwordConfirmation = useSelector(selectPasswordConfirmation);

  const [errors, setErrors] = useState({
    password: "",
    passwordConfirmation: "",
  });

  useEffect(() => {
    // Clear the password and password confirmation fields when the component mounts
    dispatch(RsetPassword(""));
    dispatch(RsetPasswordConfirmation(""));
  }, [dispatch]);

  const handleSubmit = () => {
    let validationErrors = {
      password: "",
      passwordConfirmation: "",
    };

    // Validate password
    if (!password) {
      validationErrors.password = "رمز عبور نمی‌تواند خالی باشد !";
    } else if (!passwordValidation(password)) {
      validationErrors.password =
        "رمز عبور باید حداقل شامل یک حرف کوچک، یک حرف بزرگ ، یک سمبل، یک عدد و حداقل شامل 8 کاراکتر باشد  و نباید شامل فاصله باشد  !";
    }

    // Validate password confirmation
    if (!passwordConfirmation) {
      validationErrors.passwordConfirmation =
        "تأیید رمز عبور نمی‌تواند خالی باشد !";
    } else if (password !== passwordConfirmation) {
      validationErrors.passwordConfirmation = "با رمز عبور مطابقت ندارد !";
    }

    // Check for validation errors
    if (!validationErrors.password && !validationErrors.passwordConfirmation) {
      // If no errors, proceed with form submission or any other action
      console.log("Passwords are valid. Submit the form or send data to the backend.");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="w-11/12 sm:w-8/12 lg:w-6/12 xl:w-4/12 bg-gray-100 rounded-2xl shadow-lg py-8 mx-auto mt-20">
      <h3 className="text-center text-xl text-purple-800">تأیید رمز عبور</h3>
      <div className="p-8 sm:p-16" style={{ direction: "rtl" }}>
        <Input
          className="h-12 text-white placeholder:text-purple-300 mb-4 focus-visible:ring-0 focus-visible:ring-offset-0 px-8 border-none rounded-xl bg-purple-800"
          placeholder="رمز عبور جدید را وارد کنید"
          value={password || ""}
          onChange={(e) => dispatch(RsetPassword(e.target.value))}
          type="password"
        />
        {errors.password && (
          <p className="text-red-600 text-sm mb-4">{errors.password}</p>
        )}
        <Input
          className="h-12 text-white placeholder:text-purple-300 mb-4 focus-visible:ring-0 focus-visible:ring-offset-0 px-8 border-none rounded-xl bg-purple-800"
          placeholder="تأیید رمز عبور جدید"
          value={passwordConfirmation || ""}
          onChange={(e) => dispatch(RsetPasswordConfirmation(e.target.value))}
          type="password"
        />
        {errors.passwordConfirmation && (
          <p className="text-red-600 text-sm mb-4">{errors.passwordConfirmation}</p>
        )}
        <Button
          onClick={handleSubmit}
          className="px-8 py-5 mr-1 text-white text-lg bg-violet-600 hover:text-violet-600 hover:bg-white"
        >
          تأیید
        </Button>
      </div>
    </div>
  );
};

export default ConfirmPassword;
