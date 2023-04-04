import { Routes, Route } from "react-router-dom";
import LoginForm from "./loginForm/LoginForm";
import RecoveryForm from "./recoveryForm/RecoveryForm";
import ConfirmationContent from "./confirmationContent/ConfirmationContent";
import "./app.css";

const App = () => {
  return (
    <div className="container">
      <div id="firstCol">
        <div id="logoCtr" aria-label="TEK BNK logo">
          <img
            src="https://s3-alpha-sig.figma.com/img/206a/88f9/cb327056872bce499793a56ae5db490e?Expires=1681084800&Signature=HN~25HcbkqvoxP4kCgxSJRZUXVSWWnWUfvknQaO5UdESlV2P7pX6Z2bXE9fBj81GMEXZaUtG7GiHPx9~0vPyrpr8e8mfYIW5kQ6ZQIaUYhZ2rNGd1mFKYIHLJY~PpQ9KGe5oLxgtpX~Ir3EbUHUc2AegQBxc19Yo6etSwiepB~RYR-7FMdTg1SbOSsBBUrxJCd-tjX4emE7dgd5SCKoTL8QJozEQUADE4QEFtKom0Rs6hcDny0fcQohmJxiTlT9r0z5~BPcwcJMhmZuNUsl7Y26aCrKGHU6SifJW1xZaPBmeU0olbXdEaKXPhlkkmw382io2dFXCFviQEfil5ZOWsg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="logo"
            aria-hidden
          />
          <span style={{ fontWeight: "300" }} aria-hidden>
            TEK
          </span>
          <span style={{ fontWeight: "600" }} aria-hidden>
            BNK
          </span>
        </div>
        <div id="firstColContent" className='colStyles'>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route
              path="/home"
              element={<ConfirmationContent contentMessage={"Bienvenido!"} />}
            />
            <Route path="/recover" element={<RecoveryForm />} />
            <Route
              path="/recover/confirmation"
              element={
                <ConfirmationContent
                  contentMessage={
                    "Hemos enviado el enlace para recuperación de contraseña a su mail registrado."
                  }
                />
              }
            />
            <Route path="*" element={<LoginForm />} />
          </Routes>
        </div>
      </div>
      <div id="rectangle1" />
      <img
        id="imgBcnd"
        className="imgBcndStyles"
        src="https://s3-alpha-sig.figma.com/img/5173/5b64/6b9974597fe78132613bde50abf75449?Expires=1681084800&Signature=hD-Bzmt4g270hj~J9R-6ZZA3BcJtDpNwf~xKU9KEs4kZBtIqnMhTehMXMwwOobc6MwOBoRJ0TKuir3xUB4mHKYv1IQEKuC6sbQ9YpWtm4KFE42ATY27Jf-i-JYf87JzfAi21doIDBc~6DC0hlNWFuHWXPU~WyjzOcODSDsRCtfHysXDaa2tRw~ebQ3OT2ejqAozrxFdbEXTta~xOP7n0Fvmo1DUr5Kg6y0p2qWxi0kAchHzLfmZtVhtlX68RafwadsVUVh265J3IKI6gEDKZTTMFfIc8EyzKjWkYnKNtXCNXG6CAjqXA~9YmWfF2S3-o5g~6Tjz8ScSqWYpyPgSGGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        alt="background"
      />
    </div>
  );
};

export default App;
