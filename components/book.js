import { useEffect, useState } from "react";
import { Card, CardBody, Image, Button } from "@nextui-org/react";
import { useBooksState } from "../providers/BooksContext";
const Book = ({ items }) => {
  const [isAddToList, setIsAddToList] = useState(false);
  const { listBooks, addBookToList, removeBookFromList } = useBooksState();

  useEffect(() => {
    if (listBooks.includes(items)) {
      setIsAddToList(true);
    }
  }, [listBooks, items]);

  const addBook = () => {
    setIsAddToList(!isAddToList);
    addBookToList(items);
  };

  const removeBook = () => {
    setIsAddToList(false);
    removeBookFromList(items);
  };

  const handleOnClick = () => {
    if (isAddToList) {
      removeBook();
    } else {
      addBook();
    }
  };

  let thumbnail =
    items.volumeInfo.imageLinks && items.volumeInfo.imageLinks.smallThumbnail;

  return (
    <div>
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]  bookCard"
        shadow="sm"
      >
        <CardBody>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
            <div className="relative col-span-6 md:col-span-4">
              <Image
                alt="book cover"
                className="object-cover"
                height={200}
                shadow="md"
                src={thumbnail}
                width="100%"
              />
            </div>
            <div className="flex flex-col col-span-6 md:col-span-8">
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-0">
                  <a href={items.volumeInfo.previewLink}>
                    <h2 className="font-semibold text-foreground/90 text-large">
                      {items.volumeInfo.title}
                    </h2>
                  </a>
                  <p className="text-small text-foreground/80">
                    {items.volumeInfo.authors &&
                      items.volumeInfo.authors.join(", ")}
                  </p>
                </div>
                <Button
                  className={isAddToList ? " text-danger  translate-x-2" : ""}
                  color={isAddToList ? "danger" : "success"}
                  radius="full"
                  size="sm"
                  variant="bordered"
                  onPress={handleOnClick}
                >
                  {isAddToList ? "Remove" : "Add to list"}
                </Button>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
export default Book;
