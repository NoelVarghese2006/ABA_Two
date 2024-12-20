import Page from "@components/page";
import Image from "@node_modules/next/image";
import Banner from "@components/banner";
import { motion, AnimatePresence } from "framer-motion";


export default function Home() {
    return (
        <AnimatePresence mode="wait">
        <Page>
            <Image
                alt="Intro Image"
                src="/sand.avif"
                width={1770}
                height={1180}
                className='bg-image'
              />
            <Banner className='title' />
            <div className="greetings">
                <h1>Welllcome!</h1>
                <p>We are a group of believers who gather in the name of Jesus Christ according to the New Testament principles.</p>
            </div>
        </Page>
        <motion.div
            className="slide-in"
            initial={{ scaleY: 0}}
            animate={{ scaleY: 0}}
            exit={{ scaleY: 1}}
            transition={{duration: 1, ease: [.22, 1, .36, 1]}}
        ></motion.div>
        <motion.div
            className="slide-out"
            initial={{ scaleY: 1}}
            animate={{ scaleY: 0}}
            exit={{ scaleY: 0}}
            transition={{duration: 1, ease: [.22, 1, .36, 1]}}
        ></motion.div>
        </AnimatePresence>
    )
}