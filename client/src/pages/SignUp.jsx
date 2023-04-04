import { useState } from "react";
import baseURL from "../utils/baseURL";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignupCard = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    const res = await baseURL
      .post("/signup", { name, email, password })
      .then((res) => {
        toast.success("user signup successful");
        navigate("/sign-in");
      })
      .catch((e) => toast.error(e.response.data.message));
  };

  return <div>Form</div>;
};

export default SignupCard;
