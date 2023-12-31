#include "monty.h"

/**
 * op_div - Perform a division operation on the stack
 * @stack: Pointer to the stack
 * @line_number: Line number in the file
 */
void op_div(stack_t **stack, unsigned int line_number)
{
        size_t elements = len(*stack);
        int divisor;

        if (elements < 2)
        {
                fprintf(stderr, "L%u: can't div, stack too short\n", line_number);

                free(current_state.line);
                if (current_state.file)
                        fclose(current_state.file);

                emptyStack(*stack);
                exit(EXIT_FAILURE);
        }

        divisor = (*stack)->n;

        if (divisor == 0)
        {
                fprintf(stderr, "L%u: division by zero\n", line_number);

                free(current_state.line);
                if (current_state.file)
                        fclose(current_state.file);

                emptyStack(*stack);
                exit(EXIT_FAILURE);
        }

        popStack(stack);
        (*stack)->n /= divisor;
}


/**
 * op_mul - Perform a multiplication operation on the stack
 * @stack: Pointer to the stack
 * @line_number: Line number in the file
 */
void op_mul(stack_t **stack, unsigned int line_number)
{
        size_t elements = len(*stack);
        int factor;

        if (elements < 2)
        {
                fprintf(stderr, "L%u: can't mul, stack too short\n", line_number);

                free(current_state.line);
                if (current_state.file)
                        fclose(current_state.file);

                emptyStack(*stack);
                exit(EXIT_FAILURE);
        }

        factor = (*stack)->n;

        popStack(stack);
        (*stack)->n *= factor;
}
