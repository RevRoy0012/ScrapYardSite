import React from 'react';

const SocialLinks = () => {
    return (
        <section className="py-16 bg-red-500 text-center">
            <h2 className="text-4xl text-white mb-8">Follow Us</h2>
            <div className="flex justify-center mt-8 space-x-6">
                <a
                    href="https://discord.gg/xmy9vnNEZn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-gray-800 hover:bg-gray-700 p-4 rounded-full transform transition-transform duration-300 hover:scale-110"
                >
                    <i className="fab fa-discord text-3xl"></i>
                </a>

                <a
                    href="https://www.instagram.com/sy_ir_team/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-gray-800 hover:bg-gray-700 p-4 rounded-full transform transition-transform duration-300 hover:scale-110"
                >
                    <i className="fab fa-instagram text-3xl"></i>
                </a>
            </div>
        </section>
    );
};

export default SocialLinks;
