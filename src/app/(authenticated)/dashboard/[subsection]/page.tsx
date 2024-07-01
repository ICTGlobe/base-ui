// const Subsection = ({ params }: { params: { subsection: string } }) => {
const Subsection = ({
  children,
  params,
}: {
  children?: React.ReactNode;
  params: { subsection: string };
}) => {
  return (
    <>
      <h1>Subsection {params.subsection}</h1>
      {children}
    </>
  );
};
export default Subsection;
