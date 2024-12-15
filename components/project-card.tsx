import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
        >
            <Image
                src={image}
                alt={title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
            />
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-400">{description}</p>
            </div>
        </motion.div>
    );
};

