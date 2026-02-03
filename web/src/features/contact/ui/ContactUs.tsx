/* Package components */
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

type Inputs = {
  sender_email: string;
  sender_name: string;
  subject: string;
  message: string;
}

type FormState = {
  sending: boolean;
  catchError: string[];
    inputs: Inputs;
}


export default function ContactUs() {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>(null);

  const defaultInputs = {
    sender_email: "",
    sender_name: "",
    subject: "",
    message: "",
  };

  const defaultFormState = {
    sending: false,
    catchError: [],
    inputs: defaultInputs,
  };

  const [formState, setFormState] = useState<FormState>(defaultFormState);

  const updateFormState = (
    attr: string,
    target = { name: "", value: "" },
    sending = true
  ) => {
    const { name, value } = target;

    switch (attr) {
      case "reset":
        setFormState(defaultFormState);
        break;

      case "form":
        setFormState({
          ...formState,
          inputs: {
            ...formState.inputs,
            [name]: value,
          },
        });
        break;

      case "catchError":
        setFormState({
          ...formState,
          catchError: [...new Set(formState.catchError.concat([name]))],
        });
        break;

      case "removeError":
        let catchError = formState.catchError;
        catchError = catchError.filter((error) => error !== name);

        setFormState({
          ...formState,
          catchError: catchError,
        });

        break;

      case "sending":
        setFormState({ ...formState, sending: sending });
        break;
    }
  };

  const updateInput = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    catchError(event);
    updateFormState("form", event.target);
  };

  const catchError = (event: React.FocusEvent<HTMLFormElement> | React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = event.target;

    if (event.target.type != "submit") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const not_conform =
        target.value.trim().length === 0 ||
        (target.name === "sender_email" &&
          emailRegex.test(target.value) === false);

      updateFormState(not_conform ? "catchError" : "removeError", {name: target.name, value: target.value});
    }
  };

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (
        !form.current ||
        formState.catchError.length !== 0 ||
        JSON.stringify(formState.inputs) === JSON.stringify(defaultInputs)
      ) {
        throw Error("error found!");
      }

      updateFormState("sending");

      emailjs
        .send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            subject: formState.inputs.subject,
            message: formState.inputs.message,
            sender_name: formState.inputs.sender_name,
            sender_email: formState.inputs.sender_email,
          }        
        )
        .then(
          () => {
            if (form.current) {
              form.current.reset();
              updateFormState("reset");
            }
            toast.custom((t) => (
              <div
                className={`${
                  t.visible ? "animate-enter" : "animate-leave"
                } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
              >
                <div className="flex-1 w-0 p-4">
                  <div className="flex items-start">
                    <div className="shrink-0 pt-0.5">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://avatars.githubusercontent.com/u/135693649?v=4"
                        alt=""
                      />
                    </div>
                    <div className="ml-3 flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        RABE Marcellin
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        Message reçu, je vous repondrai au plus vite.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ));
          },
          (error) => {
            setFormState({
              ...formState,
              catchError: [...formState.catchError, error.text],
              sending: false,
            });
            toast.custom((t) => (
              <div
                className={`${
                  t.visible ? "animate-enter" : "animate-leave"
                } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
              >
                <div className="flex-1 w-0 p-4">
                  <div className="flex items-start">
                    <div className="shrink-0 pt-0.5">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://avatars.githubusercontent.com/u/135693649?v=4"
                        alt=""
                      />
                    </div>
                    <div className="ml-3 flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        RABE Marcellin
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        Message non envoyé, veuillez réessayer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ));
          }
        );
    } catch (error) {}
  };

  useEffect(() => {
    emailjs.init({
      publicKey: EMAILJS_PUBLIC_KEY,
    });
  }, []);

  return (
    <>
      <div className="dark:bg-neutral-800 h-full p-8 rounded-xl md:-translate-y-[100px]">
        <div className="w-full relative">
          <form ref={form} onSubmit={sendEmail} onBlur={catchError}>
            <div className="grid gap-2">
              <div className="w-full">
                <div className="grid grid-cols-2 gap-2">
                  <div className="relative">
                    <input
                      type="text"
                      id="sender_email"
                      name="sender_email"
                      placeholder={t("email-address")}
                      value={formState.inputs.sender_email}
                      className="contact__input"
                      onChange={updateInput}
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      id="sender_name"
                      name="sender_name"
                      className="contact__input"
                      placeholder={t("client-name")}
                      value={formState.inputs.sender_name}
                      onChange={updateInput}
                    />
                  </div>
                </div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder={t("message-object")}
                  className="contact__input font-text"
                  value={formState.inputs.subject}
                  onChange={updateInput}
                />
              </div>

              <div className="my-4 relative">
                <textarea
                  id="message"
                  name="message"
                  className="contact__input contact__input--textarea"
                  placeholder={t("client-message-placeholder")}
                  value={formState.inputs.message}
                  onChange={updateInput}
                ></textarea>
                <div>
                  <button
                    type="submit"
                    className="bg-neutral-950 dark:bg-[#0070B5]! text-white w-full p-2 rounded-xl disabled:opacity-50"
                    disabled={formState.catchError.length > 0 ? true : false}

                  > {
                    formState.sending ? "Envoi..." : "M'ecrire"
                  }</button>
                </div>
                {/* <div className="absolute bottom-0 right-0 -translate-x-1/4 -translate-y-1/4">
                  <button
                    type="submit"
                    className={`enabled:active:scale-95 rounded-full p-3 border shadow-lg bg-white disabled:opacity-50 text-center`}
                    disabled={formState.catchError.length > 0 ? true : false}
                  >
                    {formState.sending && (
                      <svg
                        aria-hidden="true"
                        role="status"
                        className="inline w-4 h-4 mr-3 text-black animate-spin"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="#E5E7EB"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentColor"
                        />
                      </svg>
                    )}
                    <BsSend
                      className={`${
                        formState.sending ? "hidden" : ""
                      } text-xs text-black`}
                    />
                  </button>
                </div> */}
              </div>
            </div>
          </form>
        </div>
      </div>
      <Toaster position="bottom-center" />
    </>
  );
}
