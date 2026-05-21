import { ChangeEvent, FormEvent } from "react";

type AuthMode = "login" | "register";

type AuthPageProps = {
  authMode: AuthMode;
  onModeChange: (mode: AuthMode) => void;
  loginData: { email: string; password: string };
  onLoginChange: (field: "email" | "password", value: string) => void;
  registerData: {
    name: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
  };
  onRegisterChange: (
    field: "name" | "email" | "phone" | "password" | "confirmPassword",
    value: string
  ) => void;
  onSubmit: () => void;
  errorMessage: string;
};

export default function AuthPage({
  authMode,
  onModeChange,
  loginData,
  onLoginChange,
  registerData,
  onRegisterChange,
  onSubmit,
  errorMessage,
}: AuthPageProps) {
  const renderField = (
    label: string,
    value: string,
    onChange: (value: string) => void,
    type = "text",
    placeholder = "",
    name = ""
  ) => (
    <label className="block">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-3xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 shadow-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
      />
    </label>
  );

  return (
    <div className="min-h-screen bg-[#EFF8F0] text-slate-900">
      <div className="mx-auto grid min-h-screen max-w-6xl gap-4 px-4 py-6 sm:gap-6 sm:py-10 lg:gap-8 lg:grid-cols-[1.1fr_1fr] lg:px-0 lg:py-16">
        <div className="relative hidden min-h-[300px] items-center justify-center overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#1A6B3D] via-[#235A3D] to-[#0F3D22] p-6 text-white shadow-[0_25px_60px_rgba(15,23,42,0.2)] sm:min-h-[400px] sm:rounded-[2rem] sm:p-8 lg:flex lg:min-h-full lg:rounded-[2.5rem] lg:p-12">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 h-40 w-40 rounded-full bg-emerald-400/15 blur-3xl sm:h-80 sm:w-80 lg:h-96 lg:w-96" />
            <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl sm:h-64 sm:w-64 lg:h-80 lg:w-80" />
            <div className="absolute top-1/2 left-1/4 h-32 w-32 rounded-full bg-teal-400/5 blur-3xl sm:h-48 sm:w-48 lg:h-64 lg:w-64" />
          </div>

          {/* Decorative lines */}
          <div className="absolute inset-0">
            <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent" />
            <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-300/10 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative max-w-md space-y-2">
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-emerald-300 opacity-90">Bienvenue</p>
            <h1 className="text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-white via-emerald-100 to-emerald-200 bg-clip-text text-transparent">Bienvenue sur FootMatch</h1>
            <p className="mt-6 text-base leading-relaxed text-emerald-50/90 font-light sm:mt-8 sm:text-lg">
              Une plateforme simple pour gérer tes réservations, suivre tes matchs et commander ton équipement football.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[1.5rem] border border-emerald-100 bg-white p-6 shadow-[0_25px_60px_rgba(15,23,42,0.12)] sm:rounded-[2rem] sm:p-8 lg:rounded-[2.5rem] lg:p-12">
            <div className="absolute -top-32 right-0 h-40 w-40 rounded-full bg-emerald-50/80 blur-3xl sm:h-60 sm:w-60 lg:h-80 lg:w-80" />
            <div className="absolute -bottom-32 -left-32 h-40 w-40 rounded-full bg-emerald-100/50 blur-3xl sm:h-60 sm:w-60 lg:h-80 lg:w-80" />
            
            <div className="relative z-10">
              <div className="mb-6 sm:mb-8">
                <p className="text-xs font-medium text-slate-500 h-4 sm:text-sm sm:h-5">{authMode === "login" ? "Bienvenue de retour" : "Bienvenue chez FootMatch"}</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900 h-8 sm:mt-3 sm:text-3xl sm:h-10">{authMode === "login" ? "Connexion" : "Inscription"}</h2>
              </div>

              <div className="mb-5 flex flex-wrap gap-2 border-b border-emerald-200 pb-5 sm:mb-6 sm:gap-3 sm:pb-6">
                <button
                  type="button"
                  onClick={() => onModeChange("login")}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold transition sm:px-5 sm:py-2 sm:text-sm ${
                    authMode === "login"
                      ? "bg-[#235A3D] text-white shadow-lg shadow-emerald-300/20"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  Se connecter
                </button>
                <button
                  type="button"
                  onClick={() => onModeChange("register")}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold transition sm:px-5 sm:py-2 sm:text-sm ${
                    authMode === "register"
                      ? "bg-[#235A3D] text-white shadow-lg shadow-emerald-300/20"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  S'inscrire
                </button>
              </div>

            <form
              onSubmit={(event: FormEvent<HTMLFormElement>) => {
                event.preventDefault();
                onSubmit();
              }}
              className="space-y-4 sm:space-y-5"
            >
              {authMode === "register" &&
                renderField("Nom complet", registerData.name, (value) => onRegisterChange("name", value), "text", "Ahmed Bennani")}

              {authMode === "register" &&
                renderField("Téléphone", registerData.phone, (value) => onRegisterChange("phone", value), "tel", "06 12 34 56 78")}

              {renderField("Email", authMode === "login" ? loginData.email : registerData.email, (value) => {
                if (authMode === "login") {
                  onLoginChange("email", value);
                } else {
                  onRegisterChange("email", value);
                }
              }, "email", "exemple@mail.com")}

              {renderField("Mot de passe", authMode === "login" ? loginData.password : registerData.password, (value) => {
                if (authMode === "login") {
                  onLoginChange("password", value);
                } else {
                  onRegisterChange("password", value);
                }
              }, "password", "••••••••")}

              {authMode === "register" &&
                renderField("Confirmer mot de passe", registerData.confirmPassword, (value) => onRegisterChange("confirmPassword", value), "password", "••••••••")}

              {errorMessage ? (
                <div className="rounded-3xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {errorMessage}
                </div>
              ) : null}

              <button
                type="submit"
                className="mt-2 w-full rounded-2xl bg-gradient-to-r from-[#235A3D] to-[#1d4a32] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-300/20 transition hover:from-[#1d4a32] hover:to-[#163e2f] sm:rounded-3xl sm:px-6 sm:py-3 sm:text-base"
              >
                {authMode === "login" ? "Se connecter" : "S'inscrire"}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-500">
              {authMode === "login" ? (
                <>
                  Pas encore de compte ?{' '}
                  <button
                    type="button"
                    className="font-semibold text-[#235A3D] hover:text-[#1d4a32]"
                    onClick={() => onModeChange("register")}
                  >
                    S'inscrire
                  </button>
                </>
              ) : (
                <>
                  Déjà un compte ?{' '}
                  <button
                    type="button"
                    className="font-semibold text-[#235A3D] hover:text-[#1d4a32]"
                    onClick={() => onModeChange("login")}
                  >
                    Se connecter
                  </button>
                </>
              )}
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
