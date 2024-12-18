import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
    imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link, imageUrl }) => {
    return (
        <motion.div
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className="relative h-48 w-full">
                <Image
                    src={imageUrl}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 transform hover:scale-110"
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-100">{title}</h3>
                <p className="text-gray-300 mb-4">{description}</p>
                <Link href={link} passHref>
                    <motion.a
                        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
                        whileHover={{ y: -2 }}
                        whileTap={{ y: 0 }}
                    >
                        Ver proyecto
                    </motion.a>
                </Link>
            </div>
        </motion.div>
    );
};

export default ProjectCard;

