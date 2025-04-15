import React, { useState, useEffect } from "react";
import "./Auth.css";
import { ReactComponent as WrenchIcon } from "../assets/icons/free-icon-font-settings-3917058.svg";
import { ReactComponent as GearIcon } from "../assets/icons/free-icon-font-settings-sliders-3917103.svg";
import { supabase } from "../supabaseClient";
import bcrypt from "bcryptjs";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import eyesIcon from "../assets/icons/eyes.svg";

export default function Auth() {
  const [activeTab, setActiveTab] = useState("login");
  const [registerData, setRegisterData] = useState({ name: "", email: "", password: "" });
  const [registerError, setRegisterError] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState("");
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const navigate = useNavigate();
  const { user, setUser, handleLogout } = useUser();

  useEffect(() => {
    const savedUser = localStorage.getItem("magnum_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("magnum_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("magnum_user");
    }
  }, [user]);

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.type === "text" ? "name" : e.target.type]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setRegisterError("");
    setRegisterSuccess("");
    try {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(registerData.password, salt);
      const { error } = await supabase.from("users").insert([
        {
          name: registerData.name,
          email: registerData.email,
          password_hash: hash
        }
      ]);
      if (error) {
        setRegisterError("Ошибка регистрации: " + error.message);
      } else {
        setRegisterSuccess("Регистрация успешна! Теперь вы можете войти.");
        setRegisterData({ name: "", email: "", password: "" });
      }
    } catch (err) {
      setRegisterError("Ошибка регистрации");
    }
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.type]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError("");
    const { data, error } = await supabase
      .from("users")
      .select("id, email, password_hash, name")
      .eq("email", loginData.email)
      .single();
    if (error || !data) {
      setLoginError("Неверный email или пароль");
      return;
    }
    const isValid = bcrypt.compareSync(loginData.password, data.password_hash);
    if (!isValid) {
      setLoginError("Неверный email или пароль");
      return;
    }
    setUser({ id: data.id, name: data.name, email: data.email });
    setLoginData({ email: "", password: "" });
    navigate("/");
  };

  const handleLogoutLocal = () => {
    handleLogout();
    setActiveTab("login");
  };

  return (
    <div className="auth-bg">
      <div className="auth-container">
        <div className="auth-header">
          <WrenchIcon className="auth-icon wrench" />
          <h2>Добро пожаловать в Magnum Service</h2>
          <GearIcon className="auth-icon gear" />
        </div>
        <div className="auth-tabs">
          {user ? (
            <button onClick={handleLogoutLocal}>Выйти</button>
          ) : (
            <>
              <button
                className={activeTab === "login" ? "active" : ""}
                onClick={() => setActiveTab("login")}
              >
                Вход
              </button>
              <button
                className={activeTab === "register" ? "active" : ""}
                onClick={() => setActiveTab("register")}
              >
                Регистрация
              </button>
            </>
          )}
        </div>
        <div className={`auth-form-wrapper ${activeTab}`}> 
          {user ? null : activeTab === "login" ? (
            <form className="auth-form login-form" onSubmit={handleLogin}>
              <input type="email" placeholder="Email" required value={loginData.email} onChange={handleLoginChange} />
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <input
                  type={showLoginPassword ? "text" : "password"}
                  placeholder="Пароль"
                  required
                  value={loginData.password}
                  onChange={handleLoginChange}
                  style={{ width: '100%', boxSizing: 'border-box', paddingRight: 36 }}
                />
                <button
                  type="button"
                  onClick={() => setShowLoginPassword(v => !v)}
                  tabIndex={0}
                  style={{
                    position: 'absolute',
                    right: 10,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'transparent',
                    border: 'none',
                    padding: 0,
                    margin: 0,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 24,
                    width: 24
                  }}
                >
                  <img
                    src={eyesIcon}
                    alt="Показать пароль"
                    style={{ width: 22, height: 22, opacity: 0.7 }}
                  />
                </button>
              </div>
              <button type="submit">Войти</button>
              {loginError && <div style={{color: 'red', marginTop: 8}}>{loginError}</div>}
            </form>
          ) : (
            <form className="auth-form register-form" onSubmit={handleRegister}>
              <input type="text" placeholder="Имя" required value={registerData.name} onChange={handleRegisterChange} />
              <input type="email" placeholder="Email" required value={registerData.email} onChange={handleRegisterChange} />
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <input
                  type={showRegisterPassword ? "text" : "password"}
                  placeholder="Пароль"
                  required
                  value={registerData.password}
                  onChange={handleRegisterChange}
                  style={{ width: '100%', boxSizing: 'border-box', paddingRight: 36 }}
                />
                <button
                  type="button"
                  onClick={() => setShowRegisterPassword(v => !v)}
                  tabIndex={0}
                  style={{
                    position: 'absolute',
                    right: 10,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'transparent',
                    border: 'none',
                    padding: 0,
                    margin: 0,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 24,
                    width: 24
                  }}
                >
                  <img
                    src={eyesIcon}
                    alt="Показать пароль"
                    style={{ width: 22, height: 22, opacity: 0.7 }}
                  />
                </button>
              </div>
              <button type="submit">Зарегистрироваться</button>
              {registerError && <div style={{color: 'red', marginTop: 8}}>{registerError}</div>}
              {registerSuccess && <div style={{color: 'green', marginTop: 8}}>{registerSuccess}</div>}
            </form>
          )}
        </div>
      </div>
      <div className="auth-brochure">
        <div className="auth-quote-shelby-img-wrapper">
          <img src={require("../assets/images/shelby.jpg")} alt="Кэрролл Шелби" className="auth-quote-shelby-img large" />
        </div>
        <div className="auth-quote">
          Машина — это не просто кусок металла с двигателем. Это продолжение тебя самого. Если ты к ней относишься с уважением, она даст тебе больше, чем ты ожидаешь. А если нет — она покажет характер. Каждая машина заслуживает, чтобы за ней ухаживали по-настоящему.
        </div>
        <div className="auth-quote-author">
          <div className="auth-quote-author-details">
            <span className="auth-quote-author-name">Кэрролл Шелби</span>
            <span className="auth-quote-author-desc">легендарный автогонщик и инженер<br/>(создатель Shelby Cobra, Ford Mustang GT500)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
