import { useNavigationReact } from "../../hook";

import styles from "./ContentHeader.module.scss";

type ContentHeaderProps = {
  breadcrumbs?: { name: string; href: string | null }[];
};

const ContentHeader = ({ breadcrumbs }: ContentHeaderProps) => {
  const { router } = useNavigationReact();

  const handleRouter = (href: string) => {
    router(href);
  };

  return (
    <div className={styles.root}>
      {breadcrumbs && (
        <ul className={styles.breadcrumb_list}>
          {breadcrumbs.map((breadcrumb, index) => (
            <li
              className={styles.link}
              key={index}
              onClick={() =>
                handleRouter(breadcrumb?.href ? breadcrumb?.href : "")
              }
            >
              {breadcrumb.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { ContentHeader };
