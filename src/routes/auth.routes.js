import { Router } from "express";
import { registerUser,login, logoutUser, verifyEmail, refreshAccessToken, forgetPasswordRequest, resetForgotPassword, changeCurrentPassword, getCurrentUser, resendVerificationEmail } from "../controllers/auth.controllers.js";
import { validate } from "../middlewares/validator.middleware.js";
import {userRegisterValidator, userLoginValidator, userChangeCurrentPassowordValidators, userForgotPasswordValidators, userResetForgotPasswordValidator} from "../validators/index.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router();

router.route("/register").post(userRegisterValidator(), validate, registerUser)
router.route("/login").post(userLoginValidator(), validate, login)
router.route("/verify-email/:verificationToken").get(verifyEmail)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/forgot-password").post(userForgotPasswordValidators(),validate,forgetPasswordRequest)
router.route("/reset-password/:resetToken").post(userResetForgotPasswordValidator(),validate,resetForgotPassword)


//secure routes 
router.route("/logout").post(verifyJWT,logoutUser)
router.route("/current-user").post(verifyJWT,userChangeCurrentPassowordValidators(),validate,changeCurrentPassword)
router.route("/resend-email-verification").post(verifyJWT,resendVerificationEmail)


export  default router;