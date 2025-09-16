import React, { useState, useEffect, useRef } from "react";
import LiquidEther from "../LiquidEther"; // <- adjust path if needed
import { motion, AnimatePresence } from "framer-motion";
import { FiSend } from "react-icons/fi";

export default function Chatbot() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hello! How can I help you today?" },
    ]);
    const [activeTab, setActiveTab] = useState("code");
    const [codeOutput, setCodeOutput] = useState(
        `function greet() {\n  return "Hello World!";\n}`
    );
    const endRef = useRef(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSend = () => {
        if (input.trim().length === 0) return;

        // user message
        setMessages((m) => [...m, { sender: "user", text: input }]);

        // here you’d normally call backend/LLM
        // for now we just mock a summary + code response
        const mockSummary = `I understood your request: "${input}". I'm generating the code for it on the right.`;
        const mockCode = `// Code for: ${input}\nconsole.log("This is a mock code output for '${input}'");`;

        // update messages with summary
        setMessages((m) => [...m, { sender: "bot", text: mockSummary }]);

        // update right panel code
        setCodeOutput(mockCode);

        setInput("");
    };

    return (
        <div className="relative min-h-screen pt-16">
            {/* background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <LiquidEther
                    colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
                    mouseForce={20}
                    cursorSize={100}
                    isViscous={false}
                    viscous={30}
                    iterationsViscous={32}
                    iterationsPoisson={32}
                    resolution={0.5}
                    isBounce={false}
                    autoDemo={true}
                    autoSpeed={0.5}
                    autoIntensity={2.2}
                    takeoverDuration={0.25}
                    autoResumeDelay={3000}
                    autoRampDuration={0.6}
                />
            </div>

            {/* UI */}
            <div className="relative z-10 w-full h-[calc(100vh-4rem)] px-6">
                <div className="flex gap-4 h-full">
                    {/* Left: Chat summary */}
                    <div className="w-2/5 flex flex-col bg-transparent">
                        <div className="flex-1 overflow-auto p-4 space-y-4">
                            {messages.map((msg, i) => (
                                <div
                                    key={i}
                                    className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed break-words ${
                                        msg.sender === "user"
                                            ? "ml-auto text-white border border-purple-400/20 bg-gradient-to-r from-purple-700/12 to-purple-500/8"
                                            : "text-gray-100 border border-white/10 bg-black/20"
                                    }`}
                                >
                                    {msg.text}
                                </div>
                            ))}
                            <div ref={endRef} />
                        </div>

                        {/* input box */}
                        <div className="p-4">
                            <div className="relative">
                                <input
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Type your message..."
                                    className="w-full rounded-full px-4 py-2 bg-transparent border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
                                />
                                {input.trim().length > 5 && (
                                    <button
                                        onClick={handleSend}
                                        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-purple-500/90 hover:bg-purple-600 transition"
                                        aria-label="send"
                                    >
                                        <FiSend className="w-4 h-4 text-white" />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="w-[4px] relative flex items-stretch">
                        <div className="mx-auto h-full w-full rounded-sm bg-gray-700/10 transition-all duration-300 hover:bg-gradient-to-b hover:from-purple-400 hover:to-pink-500" />
                    </div>

                    {/* Right: Code / Preview */}
                    <div className="w-3/5 flex flex-col bg-transparent">
                        <div className="flex items-end gap-6 px-6 py-3">
                            <button
                                onClick={() => setActiveTab("code")}
                                className={`pb-2 text-sm uppercase tracking-wide font-medium transition-all rounded px-3 py-1 bg-purple-700/30 hover:bg-purple-600/50 ${
                                    activeTab === "code"
                                        ? "text-purple-200 border-b-2 border-purple-400"
                                        : "text-purple-100/70"
                                }`}
                            >
                                Code
                            </button>
                            <button
                                onClick={() => setActiveTab("preview")}
                                className={`pb-2 text-sm uppercase tracking-wide font-medium transition-all rounded px-3 py-1 bg-purple-700/30 hover:bg-purple-600/50 ${
                                    activeTab === "preview"
                                        ? "text-purple-200 border-b-2 border-purple-400"
                                        : "text-purple-100/70"
                                }`}
                            >
                                Preview
                            </button>
                        </div>

                        <div className="flex-1 p-6 overflow-auto">
                            <AnimatePresence mode="wait">
                                {activeTab === "code" ? (
                                    <motion.div
                                        key="code"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -8 }}
                                        transition={{
                                            duration: 0.35,
                                            ease: "easeInOut",
                                        }}
                                        className="rounded-xl p-4 font-mono text-sm border border-white/6 bg-transparent text-white"
                                    >
                                        <pre>{codeOutput}</pre>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="preview"
                                        initial={{ opacity: 0, scale: 0.98 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.98 }}
                                        transition={{
                                            duration: 0.35,
                                            ease: "easeInOut",
                                        }}
                                        className="rounded-xl p-6 text-sm bg-transparent flex items-center justify-center text-white/90 border border-white/6"
                                    >
                                        [Preview Output Area]
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
