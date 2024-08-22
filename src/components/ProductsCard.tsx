import { motion } from "framer-motion";

interface ProductsCardProps {
  title: string;
  description: string;
  link: string;
  backgroundImage: string;
}

const ProductsCard: React.FC<ProductsCardProps> = ({
  title,
  description,
  link,
  backgroundImage,
}) => {
  return (
    <motion.div
      className="relative w-full h-80 flex flex-col justify-end p-6 bg-cover bg-center text-white rounded-lg shadow-lg overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      <div className="relative z-10 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-3">{title}</h2>
        <p className="text-lg mb-4">{description}</p>
        <a
          href={link}
          className="inline-block py-2 px-4 rounded-lg text-white bg-black hover:bg-[#000000] transition-colors duration-300"
        >
          Learn More
        </a>
      </div>
    </motion.div>
  );
};

export default ProductsCard;
