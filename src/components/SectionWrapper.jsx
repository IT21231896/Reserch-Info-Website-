const SectionWrapper = ({ id, children }) => {
    return (
      <section id={id} className="py-16 px-6 sm:px-12 max-w-7xl mx-auto scroll-mt-20">
        {children}
      </section>
    );
  };
  
  export default SectionWrapper;
  