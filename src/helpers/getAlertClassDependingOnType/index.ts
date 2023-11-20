import { AlertTypes } from "@/components/Alert/type";
import cl from '@/components/Alert/style.module.scss'

export const getAlertClassDependingOnType = (type: AlertTypes) => {
    switch (type) {
        case AlertTypes.INFO:
            return cl.info
        case AlertTypes.DANGER:
            return cl.danger
        default:
            throw new Error("no such type defined")
    }
}