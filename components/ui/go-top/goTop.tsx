import styles from "./goTop.module.css";

const GoTop = ({
  isVisible,
  scrollToTop,
}: {
  isVisible: boolean;
  scrollToTop: () => void;
}) => {
  return (
    <div
      className={`${styles.ssGoTop} ${isVisible ? styles.linkIsVisible : ""}`}
    >
      <a
        className="smoothscroll"
        title="Back to Top"
        href="#top"
        onClick={scrollToTop}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
        >
          <path d="M12 0l8 9h-6v15h-4v-15h-6z" />
        </svg>
      </a>
    </div>
  );
};

export default GoTop;
