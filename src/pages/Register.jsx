import { ArrowRight2, Trash, Add, Minus } from "iconsax-react";
function Register() {
  return (
    <section className="register-page">
      <div className="banner">
        <article className="flex items-center justify-center">
          <span>Register Account</span>
        </article>
      </div>

      <div className="navigation mb-5 p-4">
        <p className="container mx-auto flex items-center">
          Home <ArrowRight2 size="16" /> Account <ArrowRight2 size="16" />{" "}
          Register
        </p>
      </div>

      <section className="container mx-auto px-3 md:px-0 py-5 flex justify-center">
        <form className="flex flex-col gap-5">
          <p>If you already have an account, please login at the login Page</p>

          <div className="personal-details flex flex-col gap-5 py-4">
            <h3>Personal Details</h3>

            <div className="form-option">
              <label className="md:text-end required" htmlFor="first-name">
                First Name
              </label>
              <input type="text" name="first-name" placeholder="First Name" />
            </div>

            <div className="form-option">
              <label className="md:text-end required" htmlFor="last-name">
                Last Name
              </label>
              <input type="text" name="last-name" placeholder="Last Name" />
            </div>

            <div className="form-option">
              <label className="md:text-end required" htmlFor="mail">
                E-mail
              </label>
              <input type="mail" name="mail" placeholder="E-mail" />
            </div>

            <div className="form-option">
              <label className="md:text-end required" htmlFor="telephone">
                Telephone
              </label>
              <input type="tel" name="telephone" placeholder="Telephone" />
            </div>

            <div className="form-option">
              <label className="md:text-end" htmlFor="fax">
                Fax
              </label>
              <input type="text" name="fax" placeholder="Fax" />
            </div>
          </div>

          <div className="address py-4 flex flex-col gap-5">
            <h3>Your Address </h3>

            <div className="form-option">
              <label className="md:text-end" htmlFor="company">
                Company
              </label>
              <input type="text" name="company" placeholder="Company" />
            </div>

            <div className="form-option">
              <label className="md:text-end required" htmlFor="address-1">
                Address 1
              </label>
              <input type="text" name="address-1" placeholder="Address 1" />
            </div>

            <div className="form-option">
              <label className="md:text-end" htmlFor="address-2">
                Address 2
              </label>
              <input type="text" name="address-2" placeholder="Address 2" />
            </div>

            <div className="form-option">
              <label className="md:text-end required" htmlFor="city">
                City
              </label>
              <input type="text" name="city" placeholder="City" />
            </div>

            <div className="form-option">
              <label className="md:text-end required" htmlFor="post-code">
                Post Code
              </label>
              <input type="text" name="post-code" placeholder="Post Code" />
            </div>

            <div className="form-option">
              <label className="md:text-end required" htmlFor="country">
                Country
              </label>
              <input type="text" name="country" placeholder="Country" />
            </div>

            <div className="form-option">
              <label className="md:text-end required" htmlFor="region_state">
                Region/State
              </label>
              <input
                type="text"
                name="region_state"
                placeholder="Region/State"
              />
            </div>

            <div className="password flex flex-col gap-5 py-4">
              <h3>Your Password</h3>

              <div className="form-option">
                <label className="md:text-end required" htmlFor="password">
                  Password
                </label>
                <input type="password" name="password" placeholder="Password" />
              </div>

              <div className="form-option">
                <label className="md:text-end required" htmlFor="confirm">
                  Password Confirm
                </label>
                <input
                  type="password"
                  name="confirm"
                  placeholder="Password Confirm"
                />
              </div>
            </div>

            <div className="newsletter flex flex-col gap-5 py-4">
              <h3>Newsletter</h3>

              <div className="form-option">
                <p className="md:text-end">Subscribe</p>

                <div className="flex gap-5">
                  <article className="flex gap-2 items-center">
                    <input type="radio" name="subscribe" id="yes" />
                    <label className="md:text-end" htmlFor="yes">
                      Yes{" "}
                    </label>
                  </article>

                  <article className="flex gap-2 items-center">
                    <input type="radio" name="subscribe" id="no" />
                    <label className="md:text-end" htmlFor="no">
                      No{" "}
                    </label>
                  </article>
                </div>
              </div>
            </div>

            <div className="">
              <div className="flex justify-end items-center">
                <label className="mr-3 text-end" htmlFor="agree">
                  I have read and agree to the{" "}
                  <span className="font-medium">Privacy and Policy</span>
                </label>
                <input type="checkbox" id="agree" />
                <p className="ml-8 cart-option">Continue</p>
              </div>
            </div>
          </div>
        </form>
      </section>
    </section>
  );
}

export default Register;
