import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"
import styles from "./Game.module.scss"
interface props {
    children: ReactNode
}

export const GameCardContainer = ({children}: props) => {
    return (
        <Box className={styles.card}>
            {children}
        </Box>
    )
}