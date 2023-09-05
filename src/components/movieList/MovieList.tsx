import Movie from "../Movie/Movie";
import { movies } from "../../data/data";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useIsSmall } from "./../../hooks/utils/utils";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
function MovieList() {
  const [direction, setDirection] = useState(1);
  const screenIsSmall = useIsSmall();
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(
    current === 0 ? movies.length - 1 : current - 1
  );
  const [previous, setPrevious] = useState(
    current === movies.length - 1 ? 0 : current + 1
  );

  function handlePrevious() {
    if (current === 0) {
      setCurrent(() => {
        setNext(movies.length - 2);
        setPrevious(0);
        return movies.length - 1;
      });
    } else {
      setCurrent(() => {
        setNext(current === 1 ? movies.length - 1 : current - 2);
        setPrevious(current);
        return current - 1;
      });
    }
    setDirection(-1);
  }

  function handleNext() {
    if (current === movies.length - 1) {
      setCurrent(() => {
        setNext(current);
        setPrevious(1);
        return 0;
      });
    } else {
      setCurrent(() => {
        setNext(current);
        setPrevious(current + 1 === movies.length - 1 ? 0 : current + 2);
        return current + 1;
      });
    }
    setDirection(1);
  }

  const variants = screenIsSmall
    ? {
        initial:
          direction === -1
            ? { x: 250, opacity: 0.8 }
            : { x: -250, opacity: 0.8 },
        animate: { scale: 1, x: 0, opacity: 1 },
      }
    : {
        initial:
          direction === -1
            ? {
                scale: 0.65,
                x: 445,
                opacity: 0.8,
              }
            : { scale: 0.65, x: -445, opacity: 0.8 },
        animate: { scale: 1, x: 0, opacity: 1 },
      };

  return (
    <>
      <div className="flex justify-between items-center ">
        <button
          onClick={handlePrevious}
          className=" absolute xl:relative left-0 bottom-0  text-cyan-700 hover:text-cyan-500"
        >
          <IoIosArrowDropleftCircle size="60px" />
        </button>
        <div className="my-auto flex h-[600px] w-full xl:w-[1280px] xl:h-[800px] overflo justify-center items-center relative">
          {/* Left side  */}
          <AnimatePresence>
            <motion.div
              key={previous}
              initial={
                direction === -1
                  ? { scale: 1, x: 445 }
                  : { scale: 0.5, x: -150, opacity: 0 }
              }
              animate={{ scale: 0.65, x: 0, opacity: 1 }}
              exit={direction === -1 ? { scale: 0.6, x: 100, opacity: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="hidden lg:flex absolute left-0 "
            >
              <Movie
                description={movies[current].description}
                title={movies[previous].title}
                img={movies[previous].img}
                clickable={false}
              />
            </motion.div>
          </AnimatePresence>

          {/* Right side */}
          <AnimatePresence>
            <motion.div
              key={next}
              initial={
                direction === -1
                  ? { scale: 0.5, x: -150, opacity: 0 }
                  : { scale: 1, x: -445 }
              }
              animate={{ scale: 0.65, x: 0, opacity: 1 }}
              exit={direction === -1 ? {} : { scale: 0.6, x: 100, opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 0.7 }}
              className=" hidden lg:flex absolute right-0"
            >
              <Movie
                description={movies[current].description}
                title={movies[next].title}
                img={movies[next].img}
                clickable={false}
              />
            </motion.div>
          </AnimatePresence>

          {/* Middle */}
          {/* <AnimatePresence>
          <motion.div
            key={current}
            initial={
              direction === -1
                ? { scale: 0.65, x: 445, opacity: 0.8 }
                : { scale: 0.65, x: -445, opacity: 0.8 }
            }
            animate={{ scale: 1, x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.7 }}
            className="  absolute "
          >
            <Movie title={movies[current].title} img={movies[current].img} />
          </motion.div>
        </AnimatePresence> */}

          <AnimatePresence>
            <motion.div
              key={current}
              variants={variants}
              initial="initial"
              animate="animate"
              exit={
                screenIsSmall
                  ? direction === -1
                    ? { x: -550, opacity: 0 }
                    : { x: 550, opacity: 0 }
                  : {}
              }
              transition={
                screenIsSmall
                  ? { ease: "easeInOut" }
                  : { ease: "easeInOut", duration: 0.7 }
              }
              className="  absolute "
            >
              <Movie
                description={movies[current].description}
                title={movies[current].title}
                img={movies[current].img}
                clickable={true}
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <button
          onClick={handleNext}
          className=" absolute right-0 bottom-0 z-0 xl:relative text-cyan-700 hover:text-cyan-500"
        >
          <IoIosArrowDroprightCircle size="60px" />
        </button>
      </div>
    </>
  );
}

/* With different component for the side movies */
/* Left side  */
/* <AnimatePresence>
          <motion.div
            key={previous}
            initial={
              direction === -1
                ? { scale: 1.6, x: 445 }
                : { scale: 0.5, x: -150, opacity: 0 }
            }
            animate={{ scale: 1, x: 0, opacity: 1 }}
            exit={direction === -1 ? { scale: 0.6, x: 100, opacity: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="  absolute left-0"
          >
            <SideMovie
              title={movies[previous].title}
              img={movies[previous].img}
            />
          </motion.div>
        </AnimatePresence> */

/* Middle */
/* <AnimatePresence>
          <motion.div
            key={current}
            initial={
              direction === -1
                ? { scale: 0.65, x: 445, opacity: 0.8 }
                : { scale: 0.65, x: -445, opacity: 0.8 }
            }
            animate={{ scale: 1, x: 0, opacity: 1 }}
            // exit={{ scale: 0.6,  opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.7 }}
            className=" flex justify-center items-center absolute "
          >
            <Movie title={movies[current].title} img={movies[current].img} />
          </motion.div>
        </AnimatePresence> */

/* Right side */
/* <AnimatePresence>
          <motion.div
            key={next}
            initial={
              direction === -1
                ? { scale: 0.5, x: -150, opacity: 0 }
                : { scale: 1.6, x: -445 }
            }
            animate={{ scale: 1, x: 0, opacity: 1 }}
            exit={direction === -1 ? {} : { scale: 0.6, x: 100, opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.7 }}
            className="  absolute right-0"
          >
            <SideMovie title={movies[next].title} img={movies[next].img} />
          </motion.div>
        </AnimatePresence> */

export default MovieList;
