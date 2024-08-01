import Email from "../models/email.model.js";

export const sendMail = (req, res) => {
    try {
        const {to, subject, message} = req.body

        if(!to || to === null){
            res.status(404).json({
                error: "Sender not found",
            })
        }

        const newMail = new Email({
            to,
            subject,
            message
        })

        newMail.save()
        // console.log(newMail);

        res.status(200).json({
            message: 'Email Sent'
        })
        
    } catch (error) {
        console.log('Error in Send Email controller', error.message);
        res.status(500).json({
            error: 'Internal Server Error'
        })
    }
}

export const allMail = async (req, res) => {
    try {
        const mails = await Email.find()
        res.status(200).json(mails)
        
    } catch (error) {
        console.log('Error in All Email controller', error.message);
        res.status(500).json({
            error: 'Internal Server Error'
        })
    }
}

export const deleteMail = async (req, res) => {

    try {
        const emailId = req.params
    
        const email = Email.findById(emailId)
    
        if(!email){
            return res.status(400).json({
                error : "Email not found"
            })
        }
    
        await email.deleteOne()
    
        return res.status(200).json({
            message: 'Email Deleted'
        })
    } catch (error) {
        console.log("Error in delete Email: ", error.message);
        res.status(500).json({
            error: "Internal Server Error"
        })

    }

}