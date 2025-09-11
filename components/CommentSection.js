"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { API_URL } from "@/utils/api";

export default function CommentSection() {
  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  // 🔹 Fetch comments on load
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(`${API_URL}/api/comments/`);
        const data = await res.json();
        setComments(data);
      } catch (err) {
        console.error("Failed to load comments:", err);
      }
    };
    fetchComments();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 🔹 Submit new comment
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    try {
      const res = await fetch(`${API_URL}/api/comments/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const newComment = await res.json();
        setComments([newComment, ...comments]); // prepend
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error("Error submitting comment:", err);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background via-background/95 to-background">
      <div className="container mx-auto max-w-3xl px-4">
        {/* Header */}
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-bold text-center text-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Share Your Thoughts ✨
        </motion.h2>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-card/80 rounded-3xl p-8 shadow-xl border border-border/50 backdrop-blur-lg space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="peer w-full rounded-xl border border-border bg-background px-4 pt-6 pb-2 text-foreground focus:border-primary focus:ring-2 focus:ring-primary/40 outline-none transition"
            />
            <label className="absolute left-4 top-2 text-sm text-muted-foreground transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary">
              Name *
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="peer w-full rounded-xl border border-border bg-background px-4 pt-6 pb-2 text-foreground focus:border-primary focus:ring-2 focus:ring-primary/40 outline-none transition"
            />
            <label className="absolute left-4 top-2 text-sm text-muted-foreground transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary">
              Email *
            </label>
          </div>

          <div className="relative">
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="peer w-full rounded-xl border border-border bg-background px-4 pt-6 pb-2 text-foreground focus:border-primary focus:ring-2 focus:ring-primary/40 outline-none transition resize-none"
            />
            <label className="absolute left-4 top-2 text-sm text-muted-foreground transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary">
              Comment *
            </label>
          </div>

          <motion.button
            type="submit"
            className="w-full rounded-2xl bg-primary text-primary-foreground py-4 font-semibold shadow-lg hover:shadow-xl hover:bg-primary/90 transition"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Submit Comment
          </motion.button>
        </motion.form>

        {/* Comments List */}
        <div className="mt-14 space-y-6">
          <h3 className="text-xl font-semibold text-foreground mb-6">
            {comments.length === 0
              ? "No comments yet. Be the first! 💬"
              : "Recent Comments"}
          </h3>

          <AnimatePresence>
            {comments.map((comment, index) => (
              <motion.div
                key={comment._id || index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-card border border-border/50 rounded-2xl p-6 shadow-md"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-foreground">
                    {comment.name}
                  </h4>
                  <span className="text-sm text-muted-foreground">
                    {new Date(comment.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-muted-foreground">{comment.message}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
