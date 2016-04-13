#include<stdio.h>
#include<stdlib.h>

typedef struct Titem {
    int value;
    struct Titem *nextItem;
} Titem;

typedef struct TFIFO {
    int(*Push)(struct TFIFO*, int);
    int(*Pop)(struct TFIFO*);
    void(*Clear)(struct TFIFO*);
    void(*Free)(struct TFIFO*);
    int(*Length)(struct TFIFO*);
    void(*View)(struct TFIFO*);
    int Nombre;
    struct Titem *Top;
} TFIFO;

/**
 * Create new FIFO
 */
TFIFO TFIFO_Create() {
    /*
    TFIFO fifo = malloc(sizeof(TFIFO));
 
    fifo->Nombre = 0;
    fifo->Top = malloc(sizeof(Titem));

    return fifo;
    */

    TFIFO fifo;
    
    fifo.Nombre = 0;
    
    return fifo;
}

/**
 * Add item on top of FIFO
 */
int Push(TFIFO *self, int value) {
    Titem *current = self->Top;
    Titem *next = self->Top;
    
    while (next != NULL) {
	current = next;
	next->nextItem = current->nextItem;
    }

    current->nextItem = malloc(sizeof(Titem));
    current->nextItem->value = value;
    current->nextItem->nextItem = NULL;
    self->Nombre++;
    
    return self->Nombre;
}

/**
 * Delete first item from FIFO
 */
int Pop(TFIFO *self) {
    Titem *popItem = self->Top;

    self->Top = popItem->nextItem;
    self->Nombre--;

    return popItem->value;
}

/**
 * Empty FIFO
 */
void Clear(TFIFO *self) {
    Titem *current = self->Top;
    Titem *next = self->Top;

    while (next != NULL) {
	current = next;
	next = next->nextItem;

	free(current);
    }

    self->Top = NULL;
}

/**
 * Empty and delete FIFO
 */
int Free(TFIFO *self) {
    Clear(self);
    free(self);
}

/**
 * Number of Titems in FIFO
 */
int Length(TFIFO *self) {
    return self->Nombre;
}

/**
 * Display the values of all Titems stored in FIFO
 */
void View(TFIFO *self) {
    Titem *current = self->Top;
    Titem *next = self->Top;
    int i = 0;

    while (next != NULL) {
	current = next;
	next = next->nextItem;

	printf("[%d] => %d", i, current->value);

	i++;
    }
}

int main() {
    TFIFO MaFifo = TFIFO_Create();

    MaFifo.Push(&MaFifo, 10);
    MaFifo.Push(&MaFifo, 25);
    MaFifo.View(&MaFifo);
    MaFifo.Pop(&MaFifo);
    MaFifo.View(&MaFifo);
    MaFifo.Free(&MaFifo);
}
