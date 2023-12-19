import { ContentHeader } from "../../shared/ui/content-header/ContentHeader";
import { UserEdit } from "../../widgets/profile/user-edit/UserEdit";


const ProfileEditPage = () => {

  const breadcrumb = [
    { name: "Profile", href: "/account" },
    { name: "Editing a profile", href: null },
  ];

  return (
    <>
    <ContentHeader
        breadcrumbs={breadcrumb}
        />
      <UserEdit />
    </>
  );
};

export default ProfileEditPage;