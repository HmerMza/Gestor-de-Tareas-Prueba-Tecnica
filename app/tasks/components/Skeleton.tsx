import { CodeSnippetSkeleton } from "@carbon/react";
import React from "react";
import styles from "@/app/styles/Home.module.css";

const Skeleton = () => {
  return (
    <div className={styles.skeleton}>
      <CodeSnippetSkeleton
        className=""
        type="single"
        style={{
          marginBottom: 8,
        }}
      />
      <CodeSnippetSkeleton type="multi" className="" />
      <CodeSnippetSkeleton type="multi" className="" />
    </div>
  );
};

export default Skeleton;
